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
                var output = [];
                lodash_1.default.each(rows_found.sort(), function (row_name) {
                    var cols = [];
                    lodash_1.default.each(cols_found.sort(), function (col_name) {
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
                    cols_found: cols_found,
                    output: output,
                    rows_found: rows_found,
                    rows_without_token: rows_without_token,
                };
            };
            exports_1("seriesToTable", seriesToTable);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNTSxjQUFjLEdBQUcsSUFBSSxtQkFBVyxDQUFDLGdDQUF1QixDQUFDLENBQUM7O1lBRTFELGFBQWEsR0FBRyxVQUFTLFNBQXdCLEVBQUUsT0FBd0M7Z0JBQy9GLElBQUksVUFBVSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxrQkFBa0IsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksVUFBVSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztnQkFDdEMsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQUEsUUFBUTtvQkFDaEMsSUFBSSxJQUFJLEdBQXVCLEVBQUUsQ0FBQztvQkFFbEMsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQUEsUUFBUTt3QkFDaEMsSUFBSSxhQUFhLEdBQUcsZ0JBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQzs0QkFDdkMsT0FBTyxDQUFDLENBQUMsUUFBUSxLQUFL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ICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJQm9vbVNlcmllcywgSUJvb21DZWxsRGV0YWlscywgSUJvb21UYWJsZSwgSUJvb21UYWJsZVRyYW5zZm9ybWF0aW9uT3B0aW9ucyB9IGZyb20gJy4vYm9vbS9pbmRleCc7XHJcbmltcG9ydCB7IEJvb21QYXR0ZXJuLCByZXBsYWNlVG9rZW5zIH0gZnJvbSAnLi9ib29tL2luZGV4JztcclxuaW1wb3J0IHsgZ2V0QkdDb2xvciB9IGZyb20gXCIuL2Jvb20vQm9vbVNlcmllc1V0aWxzXCI7XHJcbmltcG9ydCB7IGRlZmF1bHRfcGF0dGVybl9vcHRpb25zIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuY29uc3QgZGVmYXVsdFBhdHRlcm4gPSBuZXcgQm9vbVBhdHRlcm4oZGVmYXVsdF9wYXR0ZXJuX29wdGlvbnMpO1xyXG5cclxuY29uc3Qgc2VyaWVzVG9UYWJsZSA9IGZ1bmN0aW9uKGlucHV0ZGF0YTogSUJvb21TZXJpZXNbXSwgb3B0aW9uczogSUJvb21UYWJsZVRyYW5zZm9ybWF0aW9uT3B0aW9ucyk6IElCb29tVGFibGUge1xyXG4gIGxldCByb3dzX2ZvdW5kID0gXy51bmlxKF8ubWFwKGlucHV0ZGF0YSwgZCA9PiBkLnJvd19uYW1lKSk7XHJcbiAgbGV0IHJvd3Nfd2l0aG91dF90b2tlbiA9IF8udW5pcShfLm1hcChpbnB1dGRhdGEsIGQgPT4gZC5yb3dfbmFtZV9yYXcpKTtcclxuICBsZXQgY29sc19mb3VuZCA9IF8udW5pcShfLm1hcChpbnB1dGRhdGEsIGQgPT4gZC5jb2xfbmFtZSkpO1xyXG4gIGxldCBvdXRwdXQ6IElCb29tQ2VsbERldGFpbHNbXVtdID0gW107XHJcbiAgXy5lYWNoKHJvd3NfZm91bmQuc29ydCgpLCByb3dfbmFtZSA9PiB7XHJcbiAgICBsZXQgY29sczogSUJvb21DZWxsRGV0YWlsc1tdID0gW107XHJcbiAgICAvLyBfLmVhY2goY29sc19mb3VuZC5zb3J0KCksIGNvbF9uYW1lID0+IHtcclxuICAgIF8uZWFjaChjb2xzX2ZvdW5kLnNvcnQoKSwgY29sX25hbWUgPT4ge1xyXG4gICAgICBsZXQgbWF0Y2hlZF9pdGVtcyA9IF8uZmlsdGVyKGlucHV0ZGF0YSwgbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG8ucm93X25hbWUgPT09IHJvd19uYW1lICYmIG8uY29sX25hbWUgPT09IGNvbF9uYW1lO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCFtYXRjaGVkX2l0ZW1zIHx8IG1hdGNoZWRfaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29scy5wdXNoKHtcclxuICAgICAgICAgIGNvbF9uYW1lOiBjb2xfbmFtZSxcclxuICAgICAgICAgIGNvbG9yX2JnOiBvcHRpb25zLm5vbl9tYXRjaGluZ19jZWxsc19jb2xvcl9iZyxcclxuICAgICAgICAgIGNvbG9yX3RleHQ6IG9wdGlvbnMubm9uX21hdGNoaW5nX2NlbGxzX2NvbG9yX3RleHQsXHJcbiAgICAgICAgICBkaXNwbGF5X3ZhbHVlOiByZXBsYWNlVG9rZW5zKG9wdGlvbnMubm9uX21hdGNoaW5nX2NlbGxzX3RleHQpLFxyXG4gICAgICAgICAgaGlkZGVuOiBmYWxzZSxcclxuICAgICAgICAgIGxpbms6ICctJyxcclxuICAgICAgICAgIHJvd19uYW1lOiByb3dfbmFtZSxcclxuICAgICAgICAgIHRvb2x0aXA6ICctJyxcclxuICAgICAgICAgIHZhbHVlOiBOYU4sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2hlZF9pdGVtcyAmJiBtYXRjaGVkX2l0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIC8vIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIGlmIHBhdHRlcm4uZW5hYmxlX3RleHRDb2xvciBpcyBjaGVja2VkXHJcbiAgICAgICAgaWYgKG1hdGNoZWRfaXRlbXNbMF0ucGF0dGVybi5lbmFibGVfYmdDb2xvcikge1xyXG4gICAgICAgICAgbGV0IGR5blRocmVzaG9sZHNfZmxvYXQ6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICBfLmVhY2gobWF0Y2hlZF9pdGVtc1swXS5keW5UaHJlc2hvbGRzLCBkeW5UaHJlc2hvbGRfc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZWRfZHluVGhyZXNob2xkc19pdGVtcyA9IF8uZmlsdGVyKGlucHV0ZGF0YSwgbyA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG8ucm93X25hbWUgPT09IHJvd19uYW1lICYmIG8uY29sX25hbWUgPT09IGR5blRocmVzaG9sZF9zdHJpbmc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlZF9keW5UaHJlc2hvbGRzX2l0ZW1zICYmIG1hdGNoZWRfZHluVGhyZXNob2xkc19pdGVtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICBkeW5UaHJlc2hvbGRzX2Zsb2F0LnB1c2gobWF0Y2hlZF9keW5UaHJlc2hvbGRzX2l0ZW1zWzBdLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKGR5blRocmVzaG9sZHNfZmxvYXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBtYXRjaGVkX2l0ZW1zWzBdLmNvbG9yX2JnID0gZ2V0QkdDb2xvcihcclxuICAgICAgICAgICAgICBtYXRjaGVkX2l0ZW1zWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICAgIG1hdGNoZWRfaXRlbXNbMF0ucGF0dGVybixcclxuICAgICAgICAgICAgICBkeW5UaHJlc2hvbGRzX2Zsb2F0LFxyXG4gICAgICAgICAgICAgIG1hdGNoZWRfaXRlbXNbMF0uYmdDb2xvcnMsXHJcbiAgICAgICAgICAgICAgbWF0Y2hlZF9pdGVtc1swXS5iZ0NvbG9yc19vdmVycmlkZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xzLnB1c2gobWF0Y2hlZF9pdGVtc1swXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2hlZF9pdGVtcyAmJiBtYXRjaGVkX2l0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb2xzLnB1c2goe1xyXG4gICAgICAgICAgY29sX25hbWU6IGNvbF9uYW1lLFxyXG4gICAgICAgICAgY29sb3JfYmc6ICdkYXJrcmVkJyxcclxuICAgICAgICAgIGNvbG9yX3RleHQ6ICd3aGl0ZScsXHJcbiAgICAgICAgICBkaXNwbGF5X3ZhbHVlOiAnRHVwbGljYXRlIG1hdGNoZXMnLFxyXG4gICAgICAgICAgaGlkZGVuOiBmYWxzZSxcclxuICAgICAgICAgIGxpbms6ICctJyxcclxuICAgICAgICAgIHJvd19uYW1lOiByb3dfbmFtZSxcclxuICAgICAgICAgIHRvb2x0aXA6ICctJyxcclxuICAgICAgICAgIHZhbHVlOiBOYU4sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgb3V0cHV0LnB1c2goY29scyk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbHNfZm91bmQsXHJcbiAgICBvdXRwdXQsXHJcbiAgICByb3dzX2ZvdW5kLFxyXG4gICAgcm93c193aXRob3V0X3Rva2VuLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0UGF0dGVybiwgc2VyaWVzVG9UYWJsZSB9O1xyXG4iXX0=