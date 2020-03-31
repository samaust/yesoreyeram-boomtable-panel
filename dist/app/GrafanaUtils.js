System.register(["lodash", "app/core/utils/kbn"], function (exports_1, context_1) {
    "use strict";
    var lodash_1, kbn_1, getDecimalsForValue, get_formatted_value;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (kbn_1_1) {
                kbn_1 = kbn_1_1;
            }
        ],
        execute: function () {
            getDecimalsForValue = function (value, _decimals) {
                if (lodash_1.default.isNumber(+_decimals)) {
                    var o = {
                        decimals: _decimals,
                        scaledDecimals: null,
                    };
                    return o;
                }
                var delta = value / 2;
                var dec = -Math.floor(Math.log(delta) / Math.LN10);
                var magn = Math.pow(10, -dec), norm = delta / magn, // norm is between 1.0 and 10.0
                size;
                if (norm < 1.5) {
                    size = 1;
                }
                else if (norm < 3) {
                    size = 2;
                    // special case for 2.5, requires an extra decimal
                    if (norm > 2.25) {
                        size = 2.5;
                        ++dec;
                    }
                }
                else if (norm < 7.5) {
                    size = 5;
                }
                else {
                    size = 10;
                }
                size *= magn;
                // reduce starting decimals if not needed
                if (Math.floor(value) === value) {
                    dec = 0;
                }
                var result = {
                    decimals: Math.max(0, dec),
                    scaledDecimals: Math.max(0, dec) - Math.floor(Math.log(size) / Math.LN10) + 2,
                };
                return result;
            };
            exports_1("getDecimalsForValue", getDecimalsForValue);
            get_formatted_value = function (value, decimals, format) {
                if (!isNaN(value)) {
                    var decimalInfo = getDecimalsForValue(value, decimals);
                    var formatFunc = kbn_1.default.valueFormats[format];
                    return formatFunc(value, decimalInfo.decimals, decimalInfo.scaledDecimals);
                }
                else {
                    return value;
                }
            };
            exports_1("get_formatted_value", get_formatted_value);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhZmFuYVV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9HcmFmYW5hVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7WUFJTSxtQkFBbUIsR0FBRyxVQUFTLEtBQUssRUFBRSxTQUFTO2dCQUNuRCxJQUFJLGdCQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxHQUFXO3dCQUNkLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixjQUFjLEVBQUUsSUFBSTtxQkFDckIsQ0FBQztvQkFDRixPQUFPLENBQUMsQ0FBQztpQkFDVjtnQkFFRCxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRW5ELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQzNCLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxFQUFFLCtCQUErQjtnQkFDcEQsSUFBSSxDQUFDO2dCQUVQLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTtvQkFDZCxJQUFJLEdBQUcsQ0FBQyxDQUFDO2lCQUNWO3FCQUFNLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDVCxrREFBa0Q7b0JBQ2xELElBQUksSUFBSSxHQUFHLElBQUksRUFBRTt3QkFDZixJQUFJLEdBQUcsR0FBRyxDQUFDO3dCQUNYLEVBQUUsR0FBRyxDQUFDO3FCQUNQO2lCQUNGO3FCQUFNLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTtvQkFDckIsSUFBSSxHQUFHLENBQUMsQ0FBQztpQkFDVjtxQkFBTTtvQkFDTCxJQUFJLEdBQUcsRUFBRSxDQUFDO2lCQUNYO2dCQUVELElBQUksSUFBSSxJQUFJLENBQUM7Z0JBRWIseUNBQXlDO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFO29CQUMvQixHQUFHLEdBQUcsQ0FBQyxDQUFDO2lCQUNUO2dCQUVELElBQUksTUFBTSxHQUFXO29CQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO29CQUMxQixjQUFjLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUM5RSxDQUFDO2dCQUVGLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQzs7WUFDSSxtQkFBbUIsR0FBRyxVQUFTLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTTtnQkFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDakIsSUFBSSxXQUFXLEdBQVEsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLFVBQVUsR0FBRyxhQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMxQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQzVFO3FCQUFNO29CQUNMLE9BQU8sS0FBSyxDQUFDO2lCQUNkO1lBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2dyYWZhbmEtc2RrLW1vY2tzL2FwcC9oZWFkZXJzL2NvbW1vbi5kLnRzXCIgLz5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGtibiBmcm9tICdhcHAvY29yZS91dGlscy9rYm4nO1xyXG5cclxuY29uc3QgZ2V0RGVjaW1hbHNGb3JWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlLCBfZGVjaW1hbHMpIHtcclxuICBpZiAoXy5pc051bWJlcigrX2RlY2ltYWxzKSkge1xyXG4gICAgbGV0IG86IE9iamVjdCA9IHtcclxuICAgICAgZGVjaW1hbHM6IF9kZWNpbWFscyxcclxuICAgICAgc2NhbGVkRGVjaW1hbHM6IG51bGwsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG87XHJcbiAgfVxyXG5cclxuICBsZXQgZGVsdGEgPSB2YWx1ZSAvIDI7XHJcbiAgbGV0IGRlYyA9IC1NYXRoLmZsb29yKE1hdGgubG9nKGRlbHRhKSAvIE1hdGguTE4xMCk7XHJcblxyXG4gIGxldCBtYWduID0gTWF0aC5wb3coMTAsIC1kZWMpLFxyXG4gICAgbm9ybSA9IGRlbHRhIC8gbWFnbiwgLy8gbm9ybSBpcyBiZXR3ZWVuIDEuMCBhbmQgMTAuMFxyXG4gICAgc2l6ZTtcclxuXHJcbiAgaWYgKG5vcm0gPCAxLjUpIHtcclxuICAgIHNpemUgPSAxO1xyXG4gIH0gZWxzZSBpZiAobm9ybSA8IDMpIHtcclxuICAgIHNpemUgPSAyO1xyXG4gICAgLy8gc3BlY2lhbCBjYXNlIGZvciAyLjUsIHJlcXVpcmVzIGFuIGV4dHJhIGRlY2ltYWxcclxuICAgIGlmIChub3JtID4gMi4yNSkge1xyXG4gICAgICBzaXplID0gMi41O1xyXG4gICAgICArK2RlYztcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKG5vcm0gPCA3LjUpIHtcclxuICAgIHNpemUgPSA1O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaXplID0gMTA7XHJcbiAgfVxyXG5cclxuICBzaXplICo9IG1hZ247XHJcblxyXG4gIC8vIHJlZHVjZSBzdGFydGluZyBkZWNpbWFscyBpZiBub3QgbmVlZGVkXHJcbiAgaWYgKE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSkge1xyXG4gICAgZGVjID0gMDtcclxuICB9XHJcblxyXG4gIGxldCByZXN1bHQ6IE9iamVjdCA9IHtcclxuICAgIGRlY2ltYWxzOiBNYXRoLm1heCgwLCBkZWMpLFxyXG4gICAgc2NhbGVkRGVjaW1hbHM6IE1hdGgubWF4KDAsIGRlYykgLSBNYXRoLmZsb29yKE1hdGgubG9nKHNpemUpIC8gTWF0aC5MTjEwKSArIDIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuY29uc3QgZ2V0X2Zvcm1hdHRlZF92YWx1ZSA9IGZ1bmN0aW9uKHZhbHVlLCBkZWNpbWFscywgZm9ybWF0KTogc3RyaW5nIHtcclxuICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgbGV0IGRlY2ltYWxJbmZvOiBhbnkgPSBnZXREZWNpbWFsc0ZvclZhbHVlKHZhbHVlLCBkZWNpbWFscyk7XHJcbiAgICBsZXQgZm9ybWF0RnVuYyA9IGtibi52YWx1ZUZvcm1hdHNbZm9ybWF0XTtcclxuICAgIHJldHVybiBmb3JtYXRGdW5jKHZhbHVlLCBkZWNpbWFsSW5mby5kZWNpbWFscywgZGVjaW1hbEluZm8uc2NhbGVkRGVjaW1hbHMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgeyBnZXRfZm9ybWF0dGVkX3ZhbHVlLCBnZXREZWNpbWFsc0ZvclZhbHVlIH07XHJcbiJdfQ==