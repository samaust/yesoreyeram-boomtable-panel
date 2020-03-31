import _ from 'lodash';
import { IBoomSeries, IBoomCellDetails, IBoomTable, IBoomTableTransformationOptions } from './boom/index';
import { BoomPattern, replaceTokens } from './boom/index';
import { getBGColor } from "./boom/BoomSeriesUtils";
import { default_pattern_options } from './config';

const defaultPattern = new BoomPattern(default_pattern_options);

const seriesToTable = function(inputdata: IBoomSeries[], options: IBoomTableTransformationOptions): IBoomTable {
  let rows_found = _.uniq(_.map(inputdata, d => d.row_name));
  let rows_without_token = _.uniq(_.map(inputdata, d => d.row_name_raw));
  let cols_found = _.uniq(_.map(inputdata, d => d.col_name));
  // Add to cols_show if all rows of one column are hidden === false
  let cols_show: string[] = [];

  _.each(cols_found.sort(), col_name => {
    let cell_hidden: Boolean[] = [];
    _.each(rows_found.sort(), row_name => {
      let matched_items = _.filter(inputdata, o => {
        return o.row_name === row_name && o.col_name === col_name;
      });
      if (matched_items && matched_items.length === 1) {
        cell_hidden.push(matched_items[0].hidden);
      } else {
        cell_hidden.push(false);
      }
    });
    if (cell_hidden.map(item => item.toString()).indexOf('false') > -1) {
      cols_show.push(col_name);
    }
  });

  let output: IBoomCellDetails[][] = [];
  _.each(rows_found.sort(), row_name => {
    let cols: IBoomCellDetails[] = [];
    _.each(cols_show.sort(), col_name => {
      let matched_items = _.filter(inputdata, o => {
        return o.row_name === row_name && o.col_name === col_name;
      });
      if (!matched_items || matched_items.length === 0) {
        cols.push({
          col_name: col_name,
          color_bg: options.non_matching_cells_color_bg,
          color_text: options.non_matching_cells_color_text,
          display_value: replaceTokens(options.non_matching_cells_text),
          hidden: false,
          link: '-',
          row_name: row_name,
          tooltip: '-',
          value: NaN,
        });
      } else if (matched_items && matched_items.length === 1) {
        // Change background color if pattern.enable_textColor is checked
        if (matched_items[0].pattern.enable_bgColor) {
          let dynThresholds_float: number[] = [];
          _.each(matched_items[0].dynThresholds, dynThreshold_string => {
            let matched_dynThresholds_items = _.filter(inputdata, o => {
              return o.row_name === row_name && o.col_name === dynThreshold_string;
            });
            if (matched_dynThresholds_items && matched_dynThresholds_items.length === 1) {
              dynThresholds_float.push(matched_dynThresholds_items[0].value);
            }

          });
          if (dynThresholds_float.length > 0) {
            matched_items[0].color_bg = getBGColor(
              matched_items[0].value,
              matched_items[0].pattern,
              dynThresholds_float,
              matched_items[0].bgColors,
              matched_items[0].bgColors_overrides);
          }
        }
        cols.push(matched_items[0]);
      } else if (matched_items && matched_items.length > 1) {
        cols.push({
          col_name: col_name,
          color_bg: 'darkred',
          color_text: 'white',
          display_value: 'Duplicate matches',
          hidden: false,
          link: '-',
          row_name: row_name,
          tooltip: '-',
          value: NaN,
        });
      }
    });
    output.push(cols);
  });
  return {
    cols_show,
    output,
    rows_found,
    rows_without_token,
  };
};

export { defaultPattern, seriesToTable };
