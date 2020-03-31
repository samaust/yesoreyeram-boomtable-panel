///<reference path="../../../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(["app/core/time_series2", "lodash", "./index", "./BoomSeriesUtils", "./BoomUtils", "./../GrafanaUtils"], function (exports_1, context_1) {
    "use strict";
    var time_series2_1, lodash_1, index_1, BoomSeriesUtils_1, BoomUtils_1, GrafanaUtils_1, BoomSeries;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (time_series2_1_1) {
                time_series2_1 = time_series2_1_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (BoomSeriesUtils_1_1) {
                BoomSeriesUtils_1 = BoomSeriesUtils_1_1;
            },
            function (BoomUtils_1_1) {
                BoomUtils_1 = BoomUtils_1_1;
            },
            function (GrafanaUtils_1_1) {
                GrafanaUtils_1 = GrafanaUtils_1_1;
            }
        ],
        execute: function () {
            BoomSeries = /** @class */ (function () {
                function BoomSeries(seriesData, panelDefaultPattern, panelPatterns, options, scopedVars, templateSrv, timeSrv) {
                    this.pattern = undefined;
                    this.template_value = "";
                    this.row_col_wrapper = "_";
                    this.display_value = "-";
                    this.tooltip = "-";
                    this.value = NaN;
                    this.value_formatted = "-";
                    this.link = "-";
                    this.hidden = false;
                    this._metricname = "";
                    this._tags = [];
                    var series = new time_series2_1.default({
                        alias: seriesData.target,
                        datapoints: seriesData.datapoints || []
                    });
                    series.flotpairs = series.getFlotPairs("connected");
                    this.debug_mode = options && options.debug_mode === true ? true : false;
                    this.row_col_wrapper = options && options.row_col_wrapper ? options.row_col_wrapper : this.row_col_wrapper;
                    this.currentTimeStamp = BoomUtils_1.getCurrentTimeStamp(series.dataPoints);
                    this.seriesName = series.alias || series.aliasEscaped || series.label || series.id || "";
                    var getMatchingAndEnabledPattern = function (patterns, seriesName) { return patterns.find(function (p) { return seriesName.match(p.pattern) && p.disabled !== true; }); };
                    this.pattern = getMatchingAndEnabledPattern(panelPatterns, this.seriesName) || panelDefaultPattern;
                    this.decimals = this.pattern.decimals || panelDefaultPattern.decimals || 2;
                    this.value = BoomUtils_1.getSeriesValue(series, this.pattern.valueName);
                    this.value_formatted = GrafanaUtils_1.get_formatted_value(this.value, this.decimals, this.pattern.format);
                    this.display_value = ((lodash_1.default.isNaN(this.value) || this.value === null) ? this.pattern.null_value : String(this.value)).toString();
                    this.hidden = this.pattern.hidden === true ? true : BoomUtils_1.doesValueNeedsToHide(this.value, this.pattern.filter);
                    this._metricname = this.pattern.delimiter.toLowerCase() === "tag" ? index_1.getMetricNameFromTaggedAlias(seriesData.target) : "";
                    this._tags = this.pattern.delimiter.toLowerCase() === "tag" ? index_1.getLablesFromTaggedAlias(seriesData.target, this._metricname) : [];
                    this.row_name = BoomUtils_1.getRowName(this.pattern.row_name, this.pattern.delimiter, this.row_col_wrapper, this.seriesName, this._metricname, this._tags);
                    this.row_name_raw = BoomUtils_1.getRowName(this.pattern.row_name, this.pattern.delimiter, this.row_col_wrapper, this.seriesName, this._metricname, this._tags);
                    this.col_name = BoomUtils_1.getColName(this.pattern.col_name, this.pattern.delimiter, this.row_col_wrapper, this.seriesName, this.row_name, this._metricname, this._tags);
                    this.separator = this.pattern.separator || panelDefaultPattern.separator || ",";
                    this.thresholds = BoomSeriesUtils_1.getThresholds(templateSrv.replace(this.pattern.thresholds, scopedVars).split(this.separator).map(function (d) { return +d; }), this.pattern.enable_time_based_thresholds, this.pattern.time_based_thresholds, this.currentTimeStamp);
                    this.dynThresholds = (this.pattern.dynThresholds || "a,b").split(this.separator);
                    this.bgColors = templateSrv.replace(this.pattern.bgColors, scopedVars).split("|");
                    this.bgColors_overrides = templateSrv.replace(this.pattern.bgColors_overrides, scopedVars).split("|");
                    this.color_bg = BoomSeriesUtils_1.getBGColor(this.value, this.pattern, this.thresholds, templateSrv.replace(this.pattern.bgColors, scopedVars).split("|"), templateSrv.replace(this.pattern.bgColors_overrides, scopedVars).split("|"));
                    this.color_text = BoomSeriesUtils_1.getTextColor(this.value, this.pattern, this.thresholds, templateSrv.replace(this.pattern.textColors, scopedVars).split("|"), templateSrv.replace(this.pattern.textColors_overrides, scopedVars).split("|"));
                    this.template_value = BoomUtils_1.getDisplayValueTemplate(this.value, this.pattern, this.seriesName, this.row_col_wrapper, this.thresholds);
                    this.link = BoomSeriesUtils_1.getLink(this.pattern.enable_clickable_cells, this.pattern.clickable_cells_link, timeSrv.timeRangeForUrl());
                    this.link = BoomUtils_1.replaceDelimitedColumns(this.link, this.seriesName, this.pattern.delimiter, this.row_col_wrapper);
                    this.tooltip = this.pattern.tooltipTemplate || "Series : _series_ <br/>Row Name : _row_name_ <br/>Col Name : _col_name_ <br/>Value : _value_";
                    this.replaceSeriesRowColTokens();
                    this.link = BoomSeriesUtils_1.GetValuesReplaced(this.link, this.value, this.value_formatted, series.stats, this.decimals, this.pattern.format, this._metricname, this._tags, this.pattern.delimiter || "");
                    this.tooltip = BoomSeriesUtils_1.GetValuesReplaced(this.tooltip, this.value, this.value_formatted, series.stats, this.decimals, this.pattern.format, this._metricname, this._tags, this.pattern.delimiter || "");
                    this.display_value = BoomSeriesUtils_1.GetValuesReplaced(this.display_value, this.value, this.value_formatted, series.stats, this.decimals, this.pattern.format, this._metricname, this._tags, this.pattern.delimiter || "");
                    this.row_name = index_1.replaceTokens(this.row_name);
                    this.col_name = index_1.replaceTokens(this.col_name);
                    this.display_value = index_1.replaceTokens(this.display_value);
                    this.row_name = templateSrv.replace(this.row_name, scopedVars);
                    this.col_name = templateSrv.replace(this.col_name, scopedVars);
                    this.display_value = templateSrv.replace(this.display_value, scopedVars);
                    this.tooltip = templateSrv.replace(this.tooltip, scopedVars);
                    this.link = templateSrv.replace(this.link, scopedVars);
                    if (this.debug_mode !== true) {
                        delete this.seriesName;
                        // delete this.pattern; // data required by dynamic thresholds
                        delete this.thresholds;
                        delete this.decimals;
                        delete this.template_value;
                        delete this.value_formatted;
                        delete this.currentTimeStamp;
                    }
                }
                BoomSeries.prototype.replaceSeriesRowColTokens = function () {
                    this.link = this.link.replace(new RegExp("_series_", "g"), this.seriesName.toString().trim());
                    this.tooltip = this.tooltip.replace(new RegExp("_series_", "g"), this.seriesName.toString().trim());
                    this.display_value = this.template_value.replace(new RegExp("_series_", "g"), this.seriesName.toString());
                    this.col_name = this.col_name.replace(new RegExp("_row_name_", "g"), this.row_name.toString());
                    this.link = this.link.replace(new RegExp("_row_name_", "g"), index_1.getActualNameWithoutTokens(this.row_name.toString()).trim());
                    this.tooltip = this.tooltip.replace(new RegExp("_row_name_", "g"), index_1.getActualNameWithoutTokens(this.row_name.toString()).trim());
                    this.display_value = this.display_value.replace(new RegExp("_row_name_", "g"), this.row_name.toString());
                    this.row_name = this.row_name.replace(new RegExp("_col_name_", "g"), this.col_name.toString());
                    this.link = this.link.replace(new RegExp("_col_name_", "g"), index_1.getActualNameWithoutTokens(this.col_name.toString()).trim());
                    this.tooltip = this.tooltip.replace(new RegExp("_col_name_", "g"), index_1.getActualNameWithoutTokens(this.col_name.toString()).trim());
                    this.display_value = this.display_value.replace(new RegExp("_col_name_", "g"), this.col_name.toString());
                };
                return BoomSeries;
            }());
            exports_1("BoomSeries", BoomSeries);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vbVNlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvYm9vbS9Cb29tU2VyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVXZGO2dCQTRCSSxvQkFBWSxVQUFlLEVBQUUsbUJBQXdCLEVBQUUsYUFBb0IsRUFBRSxPQUFZLEVBQUUsVUFBZSxFQUFFLFdBQWdCLEVBQUUsT0FBWTtvQkF6QmxJLFlBQU8sR0FBUSxTQUFTLENBQUM7b0JBR3pCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO29CQUNwQixvQkFBZSxHQUFHLEdBQUcsQ0FBQztvQkFPdkIsa0JBQWEsR0FBRyxHQUFHLENBQUM7b0JBQ3BCLFlBQU8sR0FBRyxHQUFHLENBQUM7b0JBQ2QsVUFBSyxHQUFHLEdBQUcsQ0FBQztvQkFDWixvQkFBZSxHQUFHLEdBQUcsQ0FBQztvQkFDdEIsU0FBSSxHQUFHLEdBQUcsQ0FBQztvQkFNWCxXQUFNLEdBQVksS0FBSyxDQUFDO29CQUN4QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsVUFBSyxHQUFVLEVBQUUsQ0FBQztvQkFJckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBVSxDQUFDO3dCQUN4QixLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU07d0JBQ3hCLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVSxJQUFJLEVBQUU7cUJBQzFDLENBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRXBELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDeEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLGVBQWUs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RUFBRSxDQUFDLENBQUM7Z0JBRTdHLENBQUM7Z0JBRUwsaUJBQUM7WUFBRCxDQUFDLEFBdEhELElBc0hDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2dyYWZhbmEtc2RrLW1vY2tzL2FwcC9oZWFkZXJzL2NvbW1vbi5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBUaW1lU2VyaWVzIGZyb20gXCJhcHAvY29yZS90aW1lX3NlcmllczJcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyByZXBsYWNlVG9rZW5zLCBnZXRBY3R1YWxOYW1lV2l0aG91dFRva2VucywgZ2V0TWV0cmljTmFtZUZyb21UYWdnZWRBbGlhcywgZ2V0TGFibGVzRnJvbVRhZ2dlZEFsaWFzIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgZ2V0VGhyZXNob2xkcywgZ2V0QkdDb2xvciwgZ2V0VGV4dENvbG9yLCBnZXRMaW5rLCBHZXRWYWx1ZXNSZXBsYWNlZCB9IGZyb20gXCIuL0Jvb21TZXJpZXNVdGlsc1wiO1xyXG5pbXBvcnQgeyBnZXREaXNwbGF5VmFsdWVUZW1wbGF0ZSwgZ2V0U2VyaWVzVmFsdWUsIGdldEN1cnJlbnRUaW1lU3RhbXAsIHJlcGxhY2VEZWxpbWl0ZWRDb2x1bW5zLCBnZXRSb3dOYW1lLCBnZXRDb2xOYW1lLCBkb2VzVmFsdWVOZWVkc1RvSGlkZSB9IGZyb20gXCIuL0Jvb21VdGlsc1wiO1xyXG5pbXBvcnQgeyBnZXRfZm9ybWF0dGVkX3ZhbHVlIH0gZnJvbSAgXCIuLy4uL0dyYWZhbmFVdGlsc1wiO1xyXG5pbXBvcnQgeyBJQm9vbVNlcmllcyB9IGZyb20gXCIuL0Jvb20uaW50ZXJmYWNlXCI7XHJcblxyXG5jbGFzcyBCb29tU2VyaWVzIGltcGxlbWVudHMgSUJvb21TZXJpZXMge1xyXG5cclxuICAgIHByaXZhdGUgZGVidWdfbW9kZTogQm9vbGVhbjtcclxuICAgIHByaXZhdGUgcGF0dGVybjogYW55ID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBzZXJpZXNOYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lU3RhbXA6IERhdGU7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlX3ZhbHVlID0gXCJcIjtcclxuICAgIHByaXZhdGUgcm93X2NvbF93cmFwcGVyID0gXCJfXCI7XHJcbiAgICBwcml2YXRlIGRlY2ltYWxzOiBOdW1iZXI7XHJcbiAgICBwdWJsaWMgY29sX25hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByb3dfbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJvd19uYW1lX3Jhdzogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbG9yX2JnOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29sb3JfdGV4dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpc3BsYXlfdmFsdWUgPSBcIi1cIjtcclxuICAgIHB1YmxpYyB0b29sdGlwID0gXCItXCI7XHJcbiAgICBwdWJsaWMgdmFsdWUgPSBOYU47XHJcbiAgICBwdWJsaWMgdmFsdWVfZm9ybWF0dGVkID0gXCItXCI7XHJcbiAgICBwdWJsaWMgbGluayA9IFwiLVwiO1xyXG4gICAgcHVibGljIHRocmVzaG9sZHM6IE51bWJlcltdO1xyXG4gICAgcHVibGljIGR5blRocmVzaG9sZHM6IE51bWJlcltdO1xyXG4gICAgcHVibGljIGJnQ29sb3JzOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBiZ0NvbG9yc19vdmVycmlkZXM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIHNlcGFyYXRvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGhpZGRlbjogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIF9tZXRyaWNuYW1lID0gXCJcIjtcclxuICAgIHB1YmxpYyBfdGFnczogYW55W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXJpZXNEYXRhOiBhbnksIHBhbmVsRGVmYXVsdFBhdHRlcm46IGFueSwgcGFuZWxQYXR0ZXJuczogYW55W10sIG9wdGlvbnM6IGFueSwgc2NvcGVkVmFyczogYW55LCB0ZW1wbGF0ZVNydjogYW55LCB0aW1lU3J2OiBhbnkpIHtcclxuXHJcbiAgICAgICAgbGV0IHNlcmllcyA9IG5ldyBUaW1lU2VyaWVzKHtcclxuICAgICAgICAgICAgYWxpYXM6IHNlcmllc0RhdGEudGFyZ2V0LFxyXG4gICAgICAgICAgICBkYXRhcG9pbnRzOiBzZXJpZXNEYXRhLmRhdGFwb2ludHMgfHwgW11cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXJpZXMuZmxvdHBhaXJzID0gc2VyaWVzLmdldEZsb3RQYWlycyhcImNvbm5lY3RlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWJ1Z19tb2RlID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnX21vZGUgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3dfY29sX3dyYXBwZXIgPSBvcHRpb25zICYmIG9wdGlvbnMucm93X2NvbF93cmFwcGVyID8gb3B0aW9ucy5yb3dfY29sX3dyYXBwZXIgOiB0aGlzLnJvd19jb2xfd3JhcHBlcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lU3RhbXAgPSBnZXRDdXJyZW50VGltZVN0YW1wKHNlcmllcy5kYXRhUG9pbnRzKTtcclxuICAgICAgICB0aGlzLnNlcmllc05hbWUgPSBzZXJpZXMuYWxpYXMgfHwgc2VyaWVzLmFsaWFzRXNjYXBlZCB8fCBzZXJpZXMubGFiZWwgfHwgc2VyaWVzLmlkIHx8IFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBnZXRNYXRjaGluZ0FuZEVuYWJsZWRQYXR0ZXJuID0gKHBhdHRlcm5zLCBzZXJpZXNOYW1lKSA9PiBwYXR0ZXJucy5maW5kKHAgPT4gc2VyaWVzTmFtZS5tYXRjaChwLnBhdHRlcm4pICYmIHAuZGlzYWJsZWQgIT09IHRydWUpO1xyXG4gICAgICAgIHRoaXMucGF0dGVybiA9IGdldE1hdGNoaW5nQW5kRW5hYmxlZFBhdHRlcm4ocGFuZWxQYXR0ZXJucywgdGhpcy5zZXJpZXNOYW1lKSB8fCBwYW5lbERlZmF1bHRQYXR0ZXJuO1xyXG5cclxuICAgICAgICB0aGlzLmRlY2ltYWxzID0gdGhpcy5wYXR0ZXJuLmRlY2ltYWxzIHx8IHBhbmVsRGVmYXVsdFBhdHRlcm4uZGVjaW1hbHMgfHwgMjtcclxuICAgICAgICB0aGlzLnZhbHVlID0gZ2V0U2VyaWVzVmFsdWUoc2VyaWVzLCB0aGlzLnBhdHRlcm4udmFsdWVOYW1lKTtcclxuICAgICAgICB0aGlzLnZhbHVlX2Zvcm1hdHRlZCA9IGdldF9mb3JtYXR0ZWRfdmFsdWUodGhpcy52YWx1ZSwgdGhpcy5kZWNpbWFscywgdGhpcy5wYXR0ZXJuLmZvcm1hdCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X3ZhbHVlID0gKChfLmlzTmFOKHRoaXMudmFsdWUpIHx8IHRoaXMudmFsdWUgPT09IG51bGwpID8gdGhpcy5wYXR0ZXJuLm51bGxfdmFsdWUgOiBTdHJpbmcodGhpcy52YWx1ZSkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0aGlzLnBhdHRlcm4uaGlkZGVuID09PSB0cnVlID8gdHJ1ZSA6IGRvZXNWYWx1ZU5lZWRzVG9IaWRlKHRoaXMudmFsdWUsIHRoaXMucGF0dGVybi5maWx0ZXIpO1xyXG4gICAgICAgIHRoaXMuX21ldHJpY25hbWUgPSB0aGlzLnBhdHRlcm4uZGVsaW1pdGVyLnRvTG93ZXJDYXNlKCkgPT09IFwidGFnXCIgPyBnZXRNZXRyaWNOYW1lRnJvbVRhZ2dlZEFsaWFzKHNlcmllc0RhdGEudGFyZ2V0KSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fdGFncyA9IHRoaXMucGF0dGVybi5kZWxpbWl0ZXIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0YWdcIiA/IGdldExhYmxlc0Zyb21UYWdnZWRBbGlhcyhzZXJpZXNEYXRhLnRhcmdldCwgdGhpcy5fbWV0cmljbmFtZSkgOiBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dfbmFtZSA9IGdldFJvd05hbWUodGhpcy5wYXR0ZXJuLnJvd19uYW1lLCB0aGlzLnBhdHRlcm4uZGVsaW1pdGVyLCB0aGlzLnJvd19jb2xfd3JhcHBlciwgdGhpcy5zZXJpZXNOYW1lLCB0aGlzLl9tZXRyaWNuYW1lLCB0aGlzLl90YWdzKTtcclxuICAgICAgICB0aGlzLnJvd19uYW1lX3JhdyA9IGdldFJvd05hbWUodGhpcy5wYXR0ZXJuLnJvd19uYW1lLCB0aGlzLnBhdHRlcm4uZGVsaW1pdGVyLCB0aGlzLnJvd19jb2xfd3JhcHBlciwgdGhpcy5zZXJpZXNOYW1lLCB0aGlzLl9tZXRyaWNuYW1lLCB0aGlzLl90YWdzKTtcclxuICAgICAgICB0aGlzLmNvbF9uYW1lID0gZ2V0Q29sTmFtZSh0aGlzLnBhdHRlcm4uY29sX25hbWUsIHRoaXMucGF0dGVybi5kZWxpbWl0ZXIsIHRoaXMucm93X2NvbF93cmFwcGVyLCB0aGlzLnNlcmllc05hbWUsIHRoaXMucm93X25hbWUsIHRoaXMuX21ldHJpY25hbWUsIHRoaXMuX3RhZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLnNlcGFyYXRvciA9IHRoaXMucGF0dGVybi5zZXBhcmF0b3IgfHwgcGFuZWxEZWZhdWx0UGF0dGVybi5zZXBhcmF0b3IgfHwgXCIsXCI7XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGRzID0gZ2V0VGhyZXNob2xkcyh0ZW1wbGF0ZVNydi5yZXBsYWNlKHRoaXMucGF0dGVybi50aHJlc2hvbGRzLCBzY29wZWRWYXJzKS5zcGxpdCh0aGlzLnNlcGFyYXRvcikubWFwKGQgPT4gK2QpLCB0aGlzLnBhdHRlcm4uZW5hYmxlX3RpbWVfYmFzZWRfdGhyZXNob2xkcywgdGhpcy5wYXR0ZXJuLnRpbWVfYmFzZWRfdGhyZXNob2xkcywgdGhpcy5jdXJyZW50VGltZVN0YW1wKTtcclxuICAgICAgICB0aGlzLmR5blRocmVzaG9sZHMgPSAodGhpcy5wYXR0ZXJuLmR5blRocmVzaG9sZHMgfHwgXCJhLGJcIikuc3BsaXQodGhpcy5zZXBhcmF0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLmJnQ29sb3JzID0gdGVtcGxhdGVTcnYucmVwbGFjZSh0aGlzLnBhdHRlcm4uYmdDb2xvcnMsIHNjb3BlZFZhcnMpLnNwbGl0KFwifFwiKTtcclxuICAgICAgICB0aGlzLmJnQ29sb3JzX292ZXJyaWRlcyA9IHRlbXBsYXRlU3J2LnJlcGxhY2UodGhpcy5wYXR0ZXJuLmJnQ29sb3JzX292ZXJyaWRlcywgc2NvcGVkVmFycykuc3BsaXQoXCJ8XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yX2JnID0gZ2V0QkdDb2xvcih0aGlzLnZhbHVlLCB0aGlzLnBhdHRlcm4sIHRoaXMudGhyZXNob2xkcywgdGVtcGxhdGVTcnYucmVwbGFjZSh0aGlzLnBhdHRlcm4uYmdDb2xvcnMsIHNjb3BlZFZhcnMpLnNwbGl0KFwifFwiKSwgdGVtcGxhdGVTcnYucmVwbGFjZSh0aGlzLnBhdHRlcm4uYmdDb2xvcnNfb3ZlcnJpZGVzLCBzY29wZWRWYXJzKS5zcGxpdChcInxcIikpO1xyXG4gICAgICAgIHRoaXMuY29sb3JfdGV4dCA9IGdldFRleHRDb2xvcih0aGlzLnZhbHVlLCB0aGlzLnBhdHRlcm4sIHRoaXMudGhyZXNob2xkcywgdGVtcGxhdGVTcnYucmVwbGFjZSh0aGlzLnBhdHRlcm4udGV4dENvbG9ycywgc2NvcGVkVmFycykuc3BsaXQoXCJ8XCIpLCB0ZW1wbGF0ZVNydi5yZXBsYWNlKHRoaXMucGF0dGVybi50ZXh0Q29sb3JzX292ZXJyaWRlcywgc2NvcGVkVmFycykuc3BsaXQoXCJ8XCIpKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlX3ZhbHVlID0gZ2V0RGlzcGxheVZhbHVlVGVtcGxhdGUodGhpcy52YWx1ZSwgdGhpcy5wYXR0ZXJuLCB0aGlzLnNlcmllc05hbWUsIHRoaXMucm93X2NvbF93cmFwcGVyLCB0aGlzLnRocmVzaG9sZHMpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmsgPSBnZXRMaW5rKHRoaXMucGF0dGVybi5lbmFibGVfY2xpY2thYmxlX2NlbGxzLCB0aGlzLnBhdHRlcm4uY2xpY2thYmxlX2NlbGxzX2xpbmssIHRpbWVTcnYudGltZVJhbmdlRm9yVXJsKCkpO1xyXG4gICAgICAgIHRoaXMubGluayA9IHJlcGxhY2VEZWxpbWl0ZWRDb2x1bW5zKHRoaXMubGluaywgdGhpcy5zZXJpZXNOYW1lLCB0aGlzLnBhdHRlcm4uZGVsaW1pdGVyLCB0aGlzLnJvd19jb2xfd3JhcHBlcik7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMucGF0dGVybi50b29sdGlwVGVtcGxhdGUgfHwgXCJTZXJpZXMgOiBfc2VyaWVzXyA8YnIvPlJvdyBOYW1lIDogX3Jvd19uYW1lXyA8YnIvPkNvbCBOYW1lIDogX2NvbF9uYW1lXyA8YnIvPlZhbHVlIDogX3ZhbHVlX1wiO1xyXG5cclxuICAgICAgICB0aGlzLnJlcGxhY2VTZXJpZXNSb3dDb2xUb2tlbnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5rID0gR2V0VmFsdWVzUmVwbGFjZWQodGhpcy5saW5rLCB0aGlzLnZhbHVlLCB0aGlzLnZhbHVlX2Zvcm1hdHRlZCwgc2VyaWVzLnN0YXRzLCB0aGlzLmRlY2ltYWxzLCB0aGlzLnBhdHRlcm4uZm9ybWF0LCB0aGlzLl9tZXRyaWNuYW1lLCB0aGlzLl90YWdzLCB0aGlzLnBhdHRlcm4uZGVsaW1pdGVyIHx8IFwiXCIpO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcCA9IEdldFZhbHVlc1JlcGxhY2VkKHRoaXMudG9vbHRpcCwgdGhpcy52YWx1ZSwgdGhpcy52YWx1ZV9mb3JtYXR0ZWQsIHNlcmllcy5zdGF0cywgdGhpcy5kZWNpbWFscywgdGhpcy5wYXR0ZXJuLmZvcm1hdCwgdGhpcy5fbWV0cmljbmFtZSwgdGhpcy5fdGFncywgdGhpcy5wYXR0ZXJuLmRlbGltaXRlciB8fCBcIlwiKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfdmFsdWUgPSBHZXRWYWx1ZXNSZXBsYWNlZCh0aGlzLmRpc3BsYXlfdmFsdWUsIHRoaXMudmFsdWUsIHRoaXMudmFsdWVfZm9ybWF0dGVkLCBzZXJpZXMuc3RhdHMsIHRoaXMuZGVjaW1hbHMsIHRoaXMucGF0dGVybi5mb3JtYXQsIHRoaXMuX21ldHJpY25hbWUsIHRoaXMuX3RhZ3MsIHRoaXMucGF0dGVybi5kZWxpbWl0ZXIgfHwgXCJcIik7XHJcblxyXG4gICAgICAgIHRoaXMucm93X25hbWUgPSByZXBsYWNlVG9rZW5zKHRoaXMucm93X25hbWUpO1xyXG4gICAgICAgIHRoaXMuY29sX25hbWUgPSByZXBsYWNlVG9rZW5zKHRoaXMuY29sX25hbWUpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV92YWx1ZSA9IHJlcGxhY2VUb2tlbnModGhpcy5kaXNwbGF5X3ZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3dfbmFtZSA9IHRlbXBsYXRlU3J2LnJlcGxhY2UodGhpcy5yb3dfbmFtZSwgc2NvcGVkVmFycyk7XHJcbiAgICAgICAgdGhpcy5jb2xfbmFtZSA9IHRlbXBsYXRlU3J2LnJlcGxhY2UodGhpcy5jb2xfbmFtZSwgc2NvcGVkVmFycyk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5X3ZhbHVlID0gdGVtcGxhdGVTcnYucmVwbGFjZSh0aGlzLmRpc3BsYXlfdmFsdWUsIHNjb3BlZFZhcnMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvb2x0aXAgPSB0ZW1wbGF0ZVNydi5yZXBsYWNlKHRoaXMudG9vbHRpcCwgc2NvcGVkVmFycyk7XHJcbiAgICAgICAgdGhpcy5saW5rID0gdGVtcGxhdGVTcnYucmVwbGFjZSh0aGlzLmxpbmssIHNjb3BlZFZhcnMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z19tb2RlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlcmllc05hbWU7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGlzLnBhdHRlcm47IC8vIGRhdGEgcmVxdWlyZWQgYnkgZHluYW1pYyB0aHJlc2hvbGRzXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRocmVzaG9sZHM7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRlY2ltYWxzO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy50ZW1wbGF0ZV92YWx1ZTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMudmFsdWVfZm9ybWF0dGVkO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50VGltZVN0YW1wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlcGxhY2VTZXJpZXNSb3dDb2xUb2tlbnMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGluayA9IHRoaXMubGluay5yZXBsYWNlKG5ldyBSZWdFeHAoXCJfc2VyaWVzX1wiLCBcImdcIiksIHRoaXMuc2VyaWVzTmFtZS50b1N0cmluZygpLnRyaW0oKSk7XHJcbiAgICAgICAgdGhpcy50b29sdGlwID0gdGhpcy50b29sdGlwLnJlcGxhY2UobmV3IFJlZ0V4cChcIl9zZXJpZXNfXCIsIFwiZ1wiKSwgdGhpcy5zZXJpZXNOYW1lLnRvU3RyaW5nKCkudHJpbSgpKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfdmFsdWUgPSB0aGlzLnRlbXBsYXRlX3ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl9zZXJpZXNfXCIsIFwiZ1wiKSwgdGhpcy5zZXJpZXNOYW1lLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbF9uYW1lID0gdGhpcy5jb2xfbmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJfcm93X25hbWVfXCIsIFwiZ1wiKSwgdGhpcy5yb3dfbmFtZS50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLmxpbmsgPSB0aGlzLmxpbmsucmVwbGFjZShuZXcgUmVnRXhwKFwiX3Jvd19uYW1lX1wiLCBcImdcIiksIGdldEFjdHVhbE5hbWVXaXRob3V0VG9rZW5zKHRoaXMucm93X25hbWUudG9TdHJpbmcoKSkudHJpbSgpKTtcclxuICAgICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXAucmVwbGFjZShuZXcgUmVnRXhwKFwiX3Jvd19uYW1lX1wiLCBcImdcIiksIGdldEFjdHVhbE5hbWVXaXRob3V0VG9rZW5zKHRoaXMucm93X25hbWUudG9TdHJpbmcoKSkudHJpbSgpKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlfdmFsdWUgPSB0aGlzLmRpc3BsYXlfdmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiX3Jvd19uYW1lX1wiLCBcImdcIiksIHRoaXMucm93X25hbWUudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHRoaXMucm93X25hbWUgPSB0aGlzLnJvd19uYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIl9jb2xfbmFtZV9cIiwgXCJnXCIpLCB0aGlzLmNvbF9uYW1lLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMubGluayA9IHRoaXMubGluay5yZXBsYWNlKG5ldyBSZWdFeHAoXCJfY29sX25hbWVfXCIsIFwiZ1wiKSwgZ2V0QWN0dWFsTmFtZVdpdGhvdXRUb2tlbnModGhpcy5jb2xfbmFtZS50b1N0cmluZygpKS50cmltKCkpO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMudG9vbHRpcC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJfY29sX25hbWVfXCIsIFwiZ1wiKSwgZ2V0QWN0dWFsTmFtZVdpdGhvdXRUb2tlbnModGhpcy5jb2xfbmFtZS50b1N0cmluZygpKS50cmltKCkpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheV92YWx1ZSA9IHRoaXMuZGlzcGxheV92YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJfY29sX25hbWVfXCIsIFwiZ1wiKSwgdGhpcy5jb2xfbmFtZS50b1N0cmluZygpKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgQm9vbVNlcmllc1xyXG59O1xyXG4iXX0=