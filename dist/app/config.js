System.register([], function (exports_1, context_1) {
    "use strict";
    var plugin_id, value_name_options, textAlignmentOptions, config, default_pattern_options;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            plugin_id = 'yesoreyeram-boomtable-panel';
            exports_1("plugin_id", plugin_id);
            value_name_options = [
                { text: 'Min', value: 'min' },
                { text: 'Max', value: 'max' },
                { text: 'Average', value: 'avg' },
                { text: 'Current', value: 'current' },
                { text: 'Time of first non null data point', value: 'first_time_nonnull' },
                { text: 'Time of last data point', value: 'last_time' },
                { text: 'Time of last non null data point', value: 'last_time_nonnull' },
                { text: 'Time of last non null data point minus time of first non null data point', value: 'last_time_nonnull_minus_first_time_nonnull' },
                { text: 'Total', value: 'total' },
            ];
            exports_1("value_name_options", value_name_options);
            textAlignmentOptions = ['left', 'right', 'center'];
            exports_1("textAlignmentOptions", textAlignmentOptions);
            config = {
                debug_mode: false,
                error: undefined,
                groupedData: undefined,
                hide_first_column: false,
                hide_headers: false,
                panelDefaults: {
                    activePatternIndex: -1,
                    default_title_for_rows: 'Metric',
                    patterns: [],
                    row_col_wrapper: '_',
                },
            };
            exports_1("config", config);
            default_pattern_options = {
                bgColors: 'green|orange|red',
                bgColors_overrides: '0->green|2->red|1->yellow',
                clickable_cells_link: '',
                col_name: 'Value',
                decimals: 2,
                defaultBGColor: 'transparent',
                defaultTextColor: '',
                delimiter: '.',
                displayTemplate: '_value_',
                dynThresholds: 'a,b',
                enable_bgColor: false,
                enable_bgColor_overrides: false,
                enable_clickable_cells: false,
                enable_textColor: false,
                enable_textColor_overrides: false,
                enable_time_based_thresholds: false,
                enable_transform: false,
                enable_transform_overrides: false,
                filter: {
                    value_above: '',
                    value_below: '',
                },
                format: 'none',
                hidden: false,
                name: 'Default Pattern',
                null_color: 'darkred',
                null_textcolor: 'white',
                null_value: 'No data',
                pattern: '*',
                row_name: '_series_',
                separator: ',',
                textColors: 'red|orange|green',
                textColors_overrides: '0->red|2->green|1->yellow',
                thresholds: '70,90',
                time_based_thresholds: [],
                tooltipTemplate: '',
                transform_values: '_value_|_value_|_value_',
                transform_values_overrides: '0->down|1->up',
                valueName: 'avg',
            };
            exports_1("default_pattern_options", default_pattern_options);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFNLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQzs7WUFDMUMsa0JBQWtCLEdBQUc7Z0JBQ3pCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2dCQUM3QixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtnQkFDN0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7Z0JBQ2pDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUNyQyxFQUFFLElBQUksRUFBRSxtQ0FBbUMsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUU7Z0JBQzFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7Z0JBQ3ZELEVBQUUsSUFBSSxFQUFFLGtDQUFrQyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtnQkFDeEUsRUFBRSxJQUFJLEVBQUUsMEVBQTBFLEVBQUUsS0FBSyxFQUFFLDRDQUE0QyxFQUFFO2dCQUN6SSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTthQUNsQyxDQUFDOztZQUNJLG9CQUFvQixHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzs7WUFDbkQsTUFBTSxHQUFRO2dCQUNsQixVQUFVLEVBQUUsS0FBSztnQkFDakIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFdBQVcsRUFBRSxTQUFTO2dCQUN0QixpQkFBaUIsRUFBRSxLQUFLO2dCQUN4QixZQUFZLEVBQUUsS0FBSztnQkFDbkIsYUFBYSxFQUFFO29CQUNiLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDdEIsc0JBQXNCLEVBQUUsUUFBUTtvQkFDaEMsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLEdBQUc7aUJBQ3JCO2FBQ0YsQ0FBQzs7WUFDSSx1QkFBdUIsR0FBUTtnQkFDbkMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsa0JBQWtCLEVBQUUsMkJBQTJCO2dCQUMvQyxvQkFBb0IsRUFBRSxFQUFFO2dCQUN4QixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsY0FBYyxFQUFFLGFBQWE7Z0JBQzdCLGdCQUFnQixFQUFFLEVBQUU7Z0JBQ3BCLFNBQVMsRUFBRSxHQUFHO2dCQUNkLGVBQWUsRUFBRSxTQUFTO2dCQUMxQixhQUFhLEVBQUUsS0FBSztnQkFDcEIsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLHdCQUF3QixFQUFFLEtBQUs7Z0JBQy9CLHNCQUFzQixFQUFFLEtBQUs7Z0JBQzdCLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLDBCQUEwQixFQUFFLEtBQUs7Z0JBQ2pDLDRCQUE0QixFQUFFLEtBQUs7Z0JBQ25DLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLDBCQUEwQixFQUFFLEtBQUs7Z0JBQ2pDLE1BQU0sRUFBRTtvQkFDTixXQUFXLEVBQUUsRUFBRTtvQkFDZixXQUFXLEVBQUUsRUFBRTtpQkFDaEI7Z0JBQ0QsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLGNBQWMsRUFBRSxPQUFPO2dCQUN2QixVQUFVLEVBQUUsU0FBUztnQkFDckIsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFNBQVMsRUFBRSxHQUFHO2dCQUNkLFVBQVUsRUFBRSxrQkFBa0I7Z0JBQzlCLG9CQUFvQixFQUFFLDJCQUEyQjtnQkFDakQsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLHFCQUFxQixFQUFFLEVBQUU7Z0JBQ3pCLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixnQkFBZ0IsRUFBRSx5QkFBeUI7Z0JBQzNDLDBCQUEwQixFQUFFLGVBQWU7Z0JBQzNDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbHVnaW5faWQgPSAneWVzb3JleWVyYW0tYm9vbXRhYmxlLXBhbmVsJztcclxuY29uc3QgdmFsdWVfbmFtZV9vcHRpb25zID0gW1xyXG4gIHsgdGV4dDogJ01pbicsIHZhbHVlOiAnbWluJyB9LFxyXG4gIHsgdGV4dDogJ01heCcsIHZhbHVlOiAnbWF4JyB9LFxyXG4gIHsgdGV4dDogJ0F2ZXJhZ2UnLCB2YWx1ZTogJ2F2ZycgfSxcclxuICB7IHRleHQ6ICdDdXJyZW50JywgdmFsdWU6ICdjdXJyZW50JyB9LFxyXG4gIHsgdGV4dDogJ1RpbWUgb2YgZmlyc3Qgbm9uIG51bGwgZGF0YSBwb2ludCcsIHZhbHVlOiAnZmlyc3RfdGltZV9ub25udWxsJyB9LFxyXG4gIHsgdGV4dDogJ1RpbWUgb2YgbGFzdCBkYXRhIHBvaW50JywgdmFsdWU6ICdsYXN0X3RpbWUnIH0sXHJcbiAgeyB0ZXh0OiAnVGltZSBvZiBsYXN0IG5vbiBudWxsIGRhdGEgcG9pbnQnLCB2YWx1ZTogJ2xhc3RfdGltZV9ub25udWxsJyB9LFxyXG4gIHsgdGV4dDogJ1RpbWUgb2YgbGFzdCBub24gbnVsbCBkYXRhIHBvaW50IG1pbnVzIHRpbWUgb2YgZmlyc3Qgbm9uIG51bGwgZGF0YSBwb2ludCcsIHZhbHVlOiAnbGFzdF90aW1lX25vbm51bGxfbWludXNfZmlyc3RfdGltZV9ub25udWxsJyB9LFxyXG4gIHsgdGV4dDogJ1RvdGFsJywgdmFsdWU6ICd0b3RhbCcgfSxcclxuXTtcclxuY29uc3QgdGV4dEFsaWdubWVudE9wdGlvbnMgPSBbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ107XHJcbmNvbnN0IGNvbmZpZzogYW55ID0ge1xyXG4gIGRlYnVnX21vZGU6IGZhbHNlLFxyXG4gIGVycm9yOiB1bmRlZmluZWQsXHJcbiAgZ3JvdXBlZERhdGE6IHVuZGVmaW5lZCxcclxuICBoaWRlX2ZpcnN0X2NvbHVtbjogZmFsc2UsXHJcbiAgaGlkZV9oZWFkZXJzOiBmYWxzZSxcclxuICBwYW5lbERlZmF1bHRzOiB7XHJcbiAgICBhY3RpdmVQYXR0ZXJuSW5kZXg6IC0xLFxyXG4gICAgZGVmYXVsdF90aXRsZV9mb3Jfcm93czogJ01ldHJpYycsXHJcbiAgICBwYXR0ZXJuczogW10sXHJcbiAgICByb3dfY29sX3dyYXBwZXI6ICdfJyxcclxuICB9LFxyXG59O1xyXG5jb25zdCBkZWZhdWx0X3BhdHRlcm5fb3B0aW9uczogYW55ID0ge1xyXG4gIGJnQ29sb3JzOiAnZ3JlZW58b3JhbmdlfHJlZCcsXHJcbiAgYmdDb2xvcnNfb3ZlcnJpZGVzOiAnMC0+Z3JlZW58Mi0+cmVkfDEtPnllbGxvdycsXHJcbiAgY2xpY2thYmxlX2NlbGxzX2xpbms6ICcnLFxyXG4gIGNvbF9uYW1lOiAnVmFsdWUnLFxyXG4gIGRlY2ltYWxzOiAyLFxyXG4gIGRlZmF1bHRCR0NvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gIGRlZmF1bHRUZXh0Q29sb3I6ICcnLFxyXG4gIGRlbGltaXRlcjogJy4nLFxyXG4gIGRpc3BsYXlUZW1wbGF0ZTogJ192YWx1ZV8nLFxyXG4gIGR5blRocmVzaG9sZHM6ICdhLGInLFxyXG4gIGVuYWJsZV9iZ0NvbG9yOiBmYWxzZSxcclxuICBlbmFibGVfYmdDb2xvcl9vdmVycmlkZXM6IGZhbHNlLFxyXG4gIGVuYWJsZV9jbGlja2FibGVfY2VsbHM6IGZhbHNlLFxyXG4gIGVuYWJsZV90ZXh0Q29sb3I6IGZhbHNlLFxyXG4gIGVuYWJsZV90ZXh0Q29sb3Jfb3ZlcnJpZGVzOiBmYWxzZSxcclxuICBlbmFibGVfdGltZV9iYXNlZF90aHJlc2hvbGRzOiBmYWxzZSxcclxuICBlbmFibGVfdHJhbnNmb3JtOiBmYWxzZSxcclxuICBlbmFibGVfdHJhbnNmb3JtX292ZXJyaWRlczogZmFsc2UsXHJcbiAgZmlsdGVyOiB7XHJcbiAgICB2YWx1ZV9hYm92ZTogJycsXHJcbiAgICB2YWx1ZV9iZWxvdzogJycsXHJcbiAgfSxcclxuICBmb3JtYXQ6ICdub25lJyxcclxuICBoaWRkZW46IGZhbHNlLFxyXG4gIG5hbWU6ICdEZWZhdWx0IFBhdHRlcm4nLFxyXG4gIG51bGxfY29sb3I6ICdkYXJrcmVkJyxcclxuICBudWxsX3RleHRjb2xvcjogJ3doaXRlJyxcclxuICBudWxsX3ZhbHVlOiAnTm8gZGF0YScsXHJcbiAgcGF0dGVybjogJyonLFxyXG4gIHJvd19uYW1lOiAnX3Nlcmllc18nLFxyXG4gIHNlcGFyYXRvcjogJywnLFxyXG4gIHRleHRDb2xvcnM6ICdyZWR8b3JhbmdlfGdyZWVuJyxcclxuICB0ZXh0Q29sb3JzX292ZXJyaWRlczogJzAtPnJlZHwyLT5ncmVlbnwxLT55ZWxsb3cnLFxyXG4gIHRocmVzaG9sZHM6ICc3MCw5MCcsXHJcbiAgdGltZV9iYXNlZF90aHJlc2hvbGRzOiBbXSxcclxuICB0b29sdGlwVGVtcGxhdGU6ICcnLFxyXG4gIHRyYW5zZm9ybV92YWx1ZXM6ICdfdmFsdWVffF92YWx1ZV98X3ZhbHVlXycsXHJcbiAgdHJhbnNmb3JtX3ZhbHVlc19vdmVycmlkZXM6ICcwLT5kb3dufDEtPnVwJyxcclxuICB2YWx1ZU5hbWU6ICdhdmcnLFxyXG59O1xyXG5leHBvcnQgeyBwbHVnaW5faWQsIGRlZmF1bHRfcGF0dGVybl9vcHRpb25zLCB2YWx1ZV9uYW1lX29wdGlvbnMsIHRleHRBbGlnbm1lbnRPcHRpb25zLCBjb25maWcgfTtcclxuIl19