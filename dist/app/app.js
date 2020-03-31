System.register(["lodash", "./boom/index", "./boom/BoomSeriesUtils", "./config"], function (exports_1, context_1) {
    "use strict";
    var lodash_1, index_1, BoomSeriesUtils_1, config_1, defaultPattern, seriesToTable;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (BoomSeriesUtils_1_1) {
                BoomSeriesUtils_1 = BoomSeriesUtils_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }
        ],
        execute: function () {
            defaultPattern = new index_1.BoomPattern(config_1.default_pattern_options);
            exports_1("defaultPattern", defaultPattern);
            seriesToTable = function (inputdata, options) {
                var rows_found = lodash_1.default.uniq(lodash_1.default.map(inputdata, function (d) { return d.row_name; }));
                var rows_without_token = lodash_1.default.uniq(lodash_1.default.map(inputdata, function (d) { return d.row_name_raw; }));
                var cols_found = lodash_1.default.uniq(lodash_1.default.map(inputdata, function (d) { return d.col_name; }));
                //  let cols_show = .uniq(inputdata
                //    // .filter(o => {return o.hidden === false}) // wrong, we want to return true if all
                //    .filter(item => item.hidden.toString()).indexOf('false') > -1) // wrong, contains more than one column
                //    .map(d => d.col_name));
                // Add to cols_show if all rows of one column are hidden === false
                var cols_show = [];
                lodash_1.default.each(cols_found.sort(), function (col_name) {
                    var cell_hidden = [];
                    lodash_1.default.each(rows_found.sort(), function (row_name) {
                        var matched_items = lodash_1.default.filter(inputdata, function (o) {
                            return o.row_name === row_name && o.col_name === col_name;
                        });
                        if (matched_items && matched_items.length === 1) {
                            cell_hidden.push(matched_items[0].hidden);
                        }
                        else {
                            cell_hidden.push(false);
                        }
                    });
                    if (cell_hidden.map(function (item) { return item.toString(); }).indexOf('false') > -1) {
                        cols_show.push(col_name);
                    }
                });
                var output = [];
                lodash_1.default.each(rows_found.sort(), function (row_name) {
                    var cols = [];
                    lodash_1.default.each(cols_show.sort(), function (col_name) {
                        var matched_items = lodash_1.default.filter(inputdata, function (o) {
                            return o.row_name === row_name && o.col_name === col_name;
                        });
                        if (!matched_items || matched_items.length === 0) {
                            cols.push({
                                col_name: col_name,
                                color_bg: options.non_matching_cells_color_bg,
                                color_text: options.non_matching_cells_color_text,
                                display_value: index_1.replaceTokens(options.non_matching_cells_text),
                                hidden: false,
                                link: '-',
                                row_name: row_name,
                                tooltip: '-',
                                value: NaN,
                            });
                        }
                        else if (matched_items && matched_items.length === 1) {
                            // Change background color if pattern.enable_textColor is checked
                            if (matched_items[0].pattern.enable_bgColor) {
                                var dynThresholds_float_1 = [];
                                lodash_1.default.each(matched_items[0].dynThresholds, function (dynThreshold_string) {
                                    var matched_dynThresholds_items = lodash_1.default.filter(inputdata, function (o) {
                                        return o.row_name === row_name && o.col_name === dynThreshold_string;
                                    });
                                    if (matched_dynThresholds_items && matched_dynThresholds_items.length === 1) {
                                        dynThresholds_float_1.push(matched_dynThresholds_items[0].value);
                                    }
                                });
                                if (dynThresholds_float_1.length > 0) {
                                    matched_items[0].color_bg = BoomSeriesUtils_1.getBGColor(matched_items[0].value, matched_items[0].pattern, dynThresholds_float_1, matched_items[0].bgColors, matched_items[0].bgColors_overrides);
                                }
                            }
                            cols.push(matched_items[0]);
                        }
                        else if (matched_items && matched_items.length > 1) {
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
                    cols_show: cols_show,
                    output: output,
                    rows_found: rows_found,
                    rows_without_token: rows_without_token,
                };
            };
            exports_1("seriesToTable", seriesToTable);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNTSxjQUFjLEdBQUcsSUFBSSxtQkFBVyxDQUFDLGdDQUF1QixDQUFDLENBQUM7O1lBRTFELGFBQWEsR0FBRyxVQUFTLFNBQXdCLEVBQUUsT0FBd0M7Z0JBQy9GLElBQUksVUFBVSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxrQkFBa0IsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksVUFBVSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQztnQkFFN0QsbUNBQW1DO2dCQUNuQywwRkFBMEY7Z0JBQzFGLDRHQUE0RztnQkFDNUcsNkJBQTZCO2dCQUUzQixrRUFBa0U7Z0JBQ2xFLElBQUksU0FBUyxHQUFhLEVBQUUsQ0FBQztnQkFFN0IsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQUEsUUFBUTtvQkFDaEMsSUFBSSxXQUFXLEdBQWMsRUFBRSxDQUFDO29CQUNoQyxnQkFBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBQSxRQUFRO3dCQUNoQyxJQUFJLGFBQWEsR0FBRyxnQkFB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TUFBTSxHQUFHLENBQUMsRUFBRTtvQ0FDbEMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyw0QkFBVSxDQUNwQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUN0QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUN4QixxQkFBbUIsRUFDbkIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFDekIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7aUNBQ3hDOzZCQUNGOzRCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzdCOzZCQUFNLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDO2dDQUNSLFFBQVEsRUFBRSxRQUFRO2dDQUNsQixRQUFRLEVBQUUsU0FBUztnQ0FDbkIsVUFBVSxFQUFFLE9BQU87Z0NBQ25CLGFBQWEsRUFBRSxtQkFBbUI7Z0NBQ2xDLE1BQU0sRUFBRSxLQUFLO2dDQUNiLElBQUksRUFBRSxHQUFHO2dDQUNULFFBQVEsRUFBRSxRQUFRO2dDQUNsQixPQUFPLEVBQUUsR0FBRztnQ0FDWixLQUFLLEVBQUUsR0FBRzs2QkFDWCxDQUFDLENBQUM7eUJBQ0o7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTztvQkFDTCxTQUFTLFdBQUE7b0JBQ1QsTUFBTSxRQUFBO29CQUNOLFVBQVUsWUFBQTtvQkFDVixrQkFBa0Isb0JBQUE7aUJBQ25CLENBQUM7WUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJQm9vbVNlcmllcywgSUJvb21DZWxsRGV0YWlscywgSUJvb21UYWJsZSwgSUJvb21UYWJsZVRyYW5zZm9ybWF0aW9uT3B0aW9ucyB9IGZyb20gJy4vYm9vbS9pbmRleCc7XHJcbmltcG9ydCB7IEJvb21QYXR0ZXJuLCByZXBsYWNlVG9rZW5zIH0gZnJvbSAnLi9ib29tL2luZGV4JztcclxuaW1wb3J0IHsgZ2V0QkdDb2xvciB9IGZyb20gXCIuL2Jvb20vQm9vbVNlcmllc1V0aWxzXCI7XHJcbmltcG9ydCB7IGRlZmF1bHRfcGF0dGVybl9vcHRpb25zIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuY29uc3QgZGVmYXVsdFBhdHRlcm4gPSBuZXcgQm9vbVBhdHRlcm4oZGVmYXVsdF9wYXR0ZXJuX29wdGlvbnMpO1xyXG5cclxuY29uc3Qgc2VyaWVzVG9UYWJsZSA9IGZ1bmN0aW9uKGlucHV0ZGF0YTogSUJvb21TZXJpZXNbXSwgb3B0aW9uczogSUJvb21UYWJsZVRyYW5zZm9ybWF0aW9uT3B0aW9ucyk6IElCb29tVGFibGUge1xyXG4gIGxldCByb3dzX2ZvdW5kID0gXy51bmlxKF8ubWFwKGlucHV0ZGF0YSwgZCA9PiBkLnJvd19uYW1lKSk7XHJcbiAgbGV0IHJvd3Nfd2l0aG91dF90b2tlbiA9IF8udW5pcShfLm1hcChpbnB1dGRhdGEsIGQgPT4gZC5yb3dfbmFtZV9yYXcpKTtcclxuICBsZXQgY29sc19mb3VuZCA9IF8udW5pcShfLm1hcChpbnB1dGRhdGEsIGQgPT4gZC5jb2xfbmFtZSkpO1xyXG5cclxuLy8gIGxldCBjb2xzX3Nob3cgPSAudW5pcShpbnB1dGRhdGFcclxuLy8gICAgLy8gLmZpbHRlcihvID0+IHtyZXR1cm4gby5oaWRkZW4gPT09IGZhbHNlfSkgLy8gd3JvbmcsIHdlIHdhbnQgdG8gcmV0dXJuIHRydWUgaWYgYWxsXHJcbi8vICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmhpZGRlbi50b1N0cmluZygpKS5pbmRleE9mKCdmYWxzZScpID4gLTEpIC8vIHdyb25nLCBjb250YWlucyBtb3JlIHRoYW4gb25lIGNvbHVtblxyXG4vLyAgICAubWFwKGQgPT4gZC5jb2xfbmFtZSkpO1xyXG5cclxuICAvLyBBZGQgdG8gY29sc19zaG93IGlmIGFsbCByb3dzIG9mIG9uZSBjb2x1bW4gYXJlIGhpZGRlbiA9PT0gZmFsc2VcclxuICBsZXQgY29sc19zaG93OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBfLmVhY2goY29sc19mb3VuZC5zb3J0KCksIGNvbF9uYW1lID0+IHtcclxuICAgIGxldCBjZWxsX2hpZGRlbjogQm9vbGVhbltdID0gW107XHJcbiAgICBfLmVhY2gocm93c19mb3VuZC5zb3J0KCksIHJvd19uYW1lID0+IHtcclxuICAgICAgbGV0IG1hdGNoZWRfaXRlbXMgPSBfLmZpbHRlcihpbnB1dGRhdGEsIG8gPT4ge1xyXG4gICAgICAgIHJldHVybiBvLnJvd19uYW1lID09PSByb3dfbmFtZSAmJiBvLmNvbF9uYW1lID09PSBjb2xfbmFtZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChtYXRjaGVkX2l0ZW1zICYmIG1hdGNoZWRfaXRlbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgY2VsbF9oaWRkZW4ucHVzaChtYXRjaGVkX2l0ZW1zWzBdLmhpZGRlbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2VsbF9oaWRkZW4ucHVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNlbGxfaGlkZGVuLm1hcChpdGVtID0+IGl0ZW0udG9TdHJpbmcoKSkuaW5kZXhPZignZmFsc2UnKSA+IC0xKSB7XHJcbiAgICAgIGNvbHNfc2hvdy5wdXNoKGNvbF9uYW1lKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbGV0IG91dHB1dDogSUJvb21DZWxsRGV0YWlsc1tdW10gPSBbXTtcclxuICBfLmVhY2gocm93c19mb3VuZC5zb3J0KCksIHJvd19uYW1lID0+IHtcclxuICAgIGxldCBjb2xzOiBJQm9vbUNlbGxEZXRhaWxzW10gPSBbXTtcclxuICAgIF8uZWFjaChjb2xzX3Nob3cuc29ydCgpLCBjb2xfbmFtZSA9PiB7XHJcbiAgICAgIGxldCBtYXRjaGVkX2l0ZW1zID0gXy5maWx0ZXIoaW5wdXRkYXRhLCBvID0+IHtcclxuICAgICAgICByZXR1cm4gby5yb3dfbmFtZSA9PT0gcm93X25hbWUgJiYgby5jb2xfbmFtZSA9PT0gY29sX25hbWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIW1hdGNoZWRfaXRlbXMgfHwgbWF0Y2hlZF9pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb2xzLnB1c2goe1xyXG4gICAgICAgICAgY29sX25hbWU6IGNvbF9uYW1lLFxyXG4gICAgICAgICAgY29sb3JfYmc6IG9wdGlvbnMubm9uX21hdGNoaW5nX2NlbGxzX2NvbG9yX2JnLFxyXG4gICAgICAgICAgY29sb3JfdGV4dDogb3B0aW9ucy5ub25fbWF0Y2hpbmdfY2VsbHNfY29sb3JfdGV4dCxcclxuICAgICAgICAgIGRpc3BsYXlfdmFsdWU6IHJlcGxhY2VUb2tlbnMob3B0aW9ucy5ub25fbWF0Y2hpbmdfY2VsbHNfdGV4dCksXHJcbiAgICAgICAgICBoaWRkZW46IGZhbHNlLFxyXG4gICAgICAgICAgbGluazogJy0nLFxyXG4gICAgICAgICAgcm93X25hbWU6IHJvd19uYW1lLFxyXG4gICAgICAgICAgdG9vbHRpcDogJy0nLFxyXG4gICAgICAgICAgdmFsdWU6IE5hTixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChtYXRjaGVkX2l0ZW1zICYmIG1hdGNoZWRfaXRlbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgLy8gQ2hhbmdlIGJhY2tncm91bmQgY29sb3IgaWYgcGF0dGVybi5lbmFibGVfdGV4dENvbG9yIGlzIGNoZWNrZWRcclxuICAgICAgICBpZiAobWF0Y2hlZF9pdGVtc1swXS5wYXR0ZXJuLmVuYWJsZV9iZ0NvbG9yKSB7XHJcbiAgICAgICAgICBsZXQgZHluVGhyZXNob2xkc19mbG9hdDogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgIF8uZWFjaChtYXRjaGVkX2l0ZW1zWzBdLmR5blRocmVzaG9sZHMsIGR5blRocmVzaG9sZF9zdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlZF9keW5UaHJlc2hvbGRzX2l0ZW1zID0gXy5maWx0ZXIoaW5wdXRkYXRhLCBvID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gby5yb3dfbmFtZSA9PT0gcm93X25hbWUgJiYgby5jb2xfbmFtZSA9PT0gZHluVGhyZXNob2xkX3N0cmluZztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVkX2R5blRocmVzaG9sZHNfaXRlbXMgJiYgbWF0Y2hlZF9keW5UaHJlc2hvbGRzX2l0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIGR5blRocmVzaG9sZHNfZmxvYXQucHVzaChtYXRjaGVkX2R5blRocmVzaG9sZHNfaXRlbXNbMF0udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoZHluVGhyZXNob2xkc19mbG9hdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZWRfaXRlbXNbMF0uY29sb3JfYmcgPSBnZXRCR0NvbG9yKFxyXG4gICAgICAgICAgICAgIG1hdGNoZWRfaXRlbXNbMF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgbWF0Y2hlZF9pdGVtc1swXS5wYXR0ZXJuLFxyXG4gICAgICAgICAgICAgIGR5blRocmVzaG9sZHNfZmxvYXQsXHJcbiAgICAgICAgICAgICAgbWF0Y2hlZF9pdGVtc1swXS5iZ0NvbG9ycyxcclxuICAgICAgICAgICAgICBtYXRjaGVkX2l0ZW1zWzBdLmJnQ29sb3JzX292ZXJyaWRlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbHMucHVzaChtYXRjaGVkX2l0ZW1zWzBdKTtcclxuICAgICAgfSBlbHNlIGlmIChtYXRjaGVkX2l0ZW1zICYmIG1hdGNoZWRfaXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbHMucHVzaCh7XHJcbiAgICAgICAgICBjb2xfbmFtZTogY29sX25hbWUsXHJcbiAgICAgICAgICBjb2xvcl9iZzogJ2RhcmtyZWQnLFxyXG4gICAgICAgICAgY29sb3JfdGV4dDogJ3doaXRlJyxcclxuICAgICAgICAgIGRpc3BsYXlfdmFsdWU6ICdEdXBsaWNhdGUgbWF0Y2hlcycsXHJcbiAgICAgICAgICBoaWRkZW46IGZhbHNlLFxyXG4gICAgICAgICAgbGluazogJy0nLFxyXG4gICAgICAgICAgcm93X25hbWU6IHJvd19uYW1lLFxyXG4gICAgICAgICAgdG9vbHRpcDogJy0nLFxyXG4gICAgICAgICAgdmFsdWU6IE5hTixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBvdXRwdXQucHVzaChjb2xzKTtcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgY29sc19zaG93LFxyXG4gICAgb3V0cHV0LFxyXG4gICAgcm93c19mb3VuZCxcclxuICAgIHJvd3Nfd2l0aG91dF90b2tlbixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdFBhdHRlcm4sIHNlcmllc1RvVGFibGUgfTtcclxuIl19