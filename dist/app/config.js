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
                { text: 'Time of last data point', value: 'last_time' },
                { text: 'Time of last non null data point', value: 'last_time_nonnull' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFNLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQzs7WUFDMUMsa0JBQWtCLEdBQUc7Z0JBQ3pCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2dCQUM3QixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtnQkFDN0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7Z0JBQ2pDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUNyQyxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO2dCQUN2RCxFQUFFLElBQUksRUFBRSxrQ0FBa0MsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7Z0JBQ3hFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2FBQ2xDLENBQUM7O1lBQ0ksb0JBQW9CLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztZQUNuRCxNQUFNLEdBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLGlCQUFpQixFQUFFLEtBQUs7Z0JBQ3hCLFlBQVksRUFBRSxLQUFLO2dCQUNuQixhQUFhLEVBQUU7b0JBQ2Isa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUN0QixzQkFBc0IsRUFBRSxRQUFRO29CQUNoQyxRQUFRLEVBQUUsRUFBRTtvQkFDWixlQUFlLEVBQUUsR0FBRztpQkFDckI7YUFDRixDQUFDOztZQUNJLHVCQUF1QixHQUFRO2dCQUNuQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixrQkFBa0IsRUFBRSwyQkFBMkI7Z0JBQy9DLG9CQUFvQixFQUFFLEVBQUU7Z0JBQ3hCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsQ0FBQztnQkFDWCxjQUFjLEVBQUUsYUFBYTtnQkFDN0IsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEIsU0FBUyxFQUFFLEdBQUc7Z0JBQ2QsZUFBZSxFQUFFLFNBQVM7Z0JBQzFCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixjQUFjLEVBQUUsS0FBSztnQkFDckIsd0JBQXdCLEVBQUUsS0FBSztnQkFDL0Isc0JBQXNCLEVBQUUsS0FBSztnQkFDN0IsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsMEJBQTBCLEVBQUUsS0FBSztnQkFDakMsNEJBQTRCLEVBQUUsS0FBSztnQkFDbkMsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsMEJBQTBCLEVBQUUsS0FBSztnQkFDakMsTUFBTSxFQUFFO29CQUNOLFdBQVcsRUFBRSxFQUFFO29CQUNmLFdBQVcsRUFBRSxFQUFFO2lCQUNoQjtnQkFDRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixVQUFVLEVBQUUsU0FBUztnQkFDckIsY0FBYyxFQUFFLE9BQU87Z0JBQ3ZCLFVBQVUsRUFBRSxTQUFTO2dCQUNyQixPQUFPLEVBQUUsR0FBRztnQkFDWixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsU0FBUyxFQUFFLEdBQUc7Z0JBQ2QsVUFBVSxFQUFFLGtCQUFrQjtnQkFDOUIsb0JBQW9CLEVBQUUsMkJBQTJCO2dCQUNqRCxVQUFVLEVBQUUsT0FBTztnQkFDbkIscUJBQXFCLEVBQUUsRUFBRTtnQkFDekIsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLGdCQUFnQixFQUFFLHlCQUF5QjtnQkFDM0MsMEJBQTBCLEVBQUUsZUFBZTtnQkFDM0MsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBsdWdpbl9pZCA9ICd5ZXNvcmV5ZXJhbS1ib29tdGFibGUtcGFuZWwnO1xyXG5jb25zdCB2YWx1ZV9uYW1lX29wdGlvbnMgPSBbXHJcbiAgeyB0ZXh0OiAnTWluJywgdmFsdWU6ICdtaW4nIH0sXHJcbiAgeyB0ZXh0OiAnTWF4JywgdmFsdWU6ICdtYXgnIH0sXHJcbiAgeyB0ZXh0OiAnQXZlcmFnZScsIHZhbHVlOiAnYXZnJyB9LFxyXG4gIHsgdGV4dDogJ0N1cnJlbnQnLCB2YWx1ZTogJ2N1cnJlbnQnIH0sXHJcbiAgeyB0ZXh0OiAnVGltZSBvZiBsYXN0IGRhdGEgcG9pbnQnLCB2YWx1ZTogJ2xhc3RfdGltZScgfSxcclxuICB7IHRleHQ6ICdUaW1lIG9mIGxhc3Qgbm9uIG51bGwgZGF0YSBwb2ludCcsIHZhbHVlOiAnbGFzdF90aW1lX25vbm51bGwnIH0sXHJcbiAgeyB0ZXh0OiAnVG90YWwnLCB2YWx1ZTogJ3RvdGFsJyB9LFxyXG5dO1xyXG5jb25zdCB0ZXh0QWxpZ25tZW50T3B0aW9ucyA9IFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXTtcclxuY29uc3QgY29uZmlnOiBhbnkgPSB7XHJcbiAgZGVidWdfbW9kZTogZmFsc2UsXHJcbiAgZXJyb3I6IHVuZGVmaW5lZCxcclxuICBncm91cGVkRGF0YTogdW5kZWZpbmVkLFxyXG4gIGhpZGVfZmlyc3RfY29sdW1uOiBmYWxzZSxcclxuICBoaWRlX2hlYWRlcnM6IGZhbHNlLFxyXG4gIHBhbmVsRGVmYXVsdHM6IHtcclxuICAgIGFjdGl2ZVBhdHRlcm5JbmRleDogLTEsXHJcbiAgICBkZWZhdWx0X3RpdGxlX2Zvcl9yb3dzOiAnTWV0cmljJyxcclxuICAgIHBhdHRlcm5zOiBbXSxcclxuICAgIHJvd19jb2xfd3JhcHBlcjogJ18nLFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IGRlZmF1bHRfcGF0dGVybl9vcHRpb25zOiBhbnkgPSB7XHJcbiAgYmdDb2xvcnM6ICdncmVlbnxvcmFuZ2V8cmVkJyxcclxuICBiZ0NvbG9yc19vdmVycmlkZXM6ICcwLT5ncmVlbnwyLT5yZWR8MS0+eWVsbG93JyxcclxuICBjbGlja2FibGVfY2VsbHNfbGluazogJycsXHJcbiAgY29sX25hbWU6ICdWYWx1ZScsXHJcbiAgZGVjaW1hbHM6IDIsXHJcbiAgZGVmYXVsdEJHQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgZGVmYXVsdFRleHRDb2xvcjogJycsXHJcbiAgZGVsaW1pdGVyOiAnLicsXHJcbiAgZGlzcGxheVRlbXBsYXRlOiAnX3ZhbHVlXycsXHJcbiAgZHluVGhyZXNob2xkczogJ2EsYicsXHJcbiAgZW5hYmxlX2JnQ29sb3I6IGZhbHNlLFxyXG4gIGVuYWJsZV9iZ0NvbG9yX292ZXJyaWRlczogZmFsc2UsXHJcbiAgZW5hYmxlX2NsaWNrYWJsZV9jZWxsczogZmFsc2UsXHJcbiAgZW5hYmxlX3RleHRDb2xvcjogZmFsc2UsXHJcbiAgZW5hYmxlX3RleHRDb2xvcl9vdmVycmlkZXM6IGZhbHNlLFxyXG4gIGVuYWJsZV90aW1lX2Jhc2VkX3RocmVzaG9sZHM6IGZhbHNlLFxyXG4gIGVuYWJsZV90cmFuc2Zvcm06IGZhbHNlLFxyXG4gIGVuYWJsZV90cmFuc2Zvcm1fb3ZlcnJpZGVzOiBmYWxzZSxcclxuICBmaWx0ZXI6IHtcclxuICAgIHZhbHVlX2Fib3ZlOiAnJyxcclxuICAgIHZhbHVlX2JlbG93OiAnJyxcclxuICB9LFxyXG4gIGZvcm1hdDogJ25vbmUnLFxyXG4gIG5hbWU6ICdEZWZhdWx0IFBhdHRlcm4nLFxyXG4gIG51bGxfY29sb3I6ICdkYXJrcmVkJyxcclxuICBudWxsX3RleHRjb2xvcjogJ3doaXRlJyxcclxuICBudWxsX3ZhbHVlOiAnTm8gZGF0YScsXHJcbiAgcGF0dGVybjogJyonLFxyXG4gIHJvd19uYW1lOiAnX3Nlcmllc18nLFxyXG4gIHNlcGFyYXRvcjogJywnLFxyXG4gIHRleHRDb2xvcnM6ICdyZWR8b3JhbmdlfGdyZWVuJyxcclxuICB0ZXh0Q29sb3JzX292ZXJyaWRlczogJzAtPnJlZHwyLT5ncmVlbnwxLT55ZWxsb3cnLFxyXG4gIHRocmVzaG9sZHM6ICc3MCw5MCcsXHJcbiAgdGltZV9iYXNlZF90aHJlc2hvbGRzOiBbXSxcclxuICB0b29sdGlwVGVtcGxhdGU6ICcnLFxyXG4gIHRyYW5zZm9ybV92YWx1ZXM6ICdfdmFsdWVffF92YWx1ZV98X3ZhbHVlXycsXHJcbiAgdHJhbnNmb3JtX3ZhbHVlc19vdmVycmlkZXM6ICcwLT5kb3dufDEtPnVwJyxcclxuICB2YWx1ZU5hbWU6ICdhdmcnLFxyXG59O1xyXG5leHBvcnQgeyBwbHVnaW5faWQsIGRlZmF1bHRfcGF0dGVybl9vcHRpb25zLCB2YWx1ZV9uYW1lX29wdGlvbnMsIHRleHRBbGlnbm1lbnRPcHRpb25zLCBjb25maWcgfTtcclxuIl19