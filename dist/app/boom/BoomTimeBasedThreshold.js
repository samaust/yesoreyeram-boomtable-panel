System.register([], function (exports_1, context_1) {
    "use strict";
    var BoomTimeBasedThreshold;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            BoomTimeBasedThreshold = (function () {
                function BoomTimeBasedThreshold() {
                    this.enabledDays = 'Sun,Mon,Tue,Wed,Thu,Fri,Sat';
                    this.from = '0000';
                    this.name = 'Early morning of everyday';
                    this.threshold = '70,90';
                    this.to = '0530';
                }
                return BoomTimeBasedThreshold;
            }());
            exports_1("BoomTimeBasedThreshold", BoomTimeBasedThreshold);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vbVRpbWVCYXNlZFRocmVzaG9sZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvYm9vbS9Cb29tVGltZUJhc2VkVGhyZXNob2xkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFFQTtnQkFNRTtvQkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLDZCQUE2QixDQUFDO29CQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztvQkFDbkIsSUFBSSxDQUFDLElBQUksR0FBRywyQkFBMkIsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUNuQixDQUFDO2dCQUNILDZCQUFDO1lBQUQsQ0FBQyxBQWJELElBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQm9vbVRpbWVCYXNlZFRocmVzaG9sZCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuY2xhc3MgQm9vbVRpbWVCYXNlZFRocmVzaG9sZCBpbXBsZW1lbnRzIElCb29tVGltZUJhc2VkVGhyZXNob2xkIHtcclxuICBwdWJsaWMgZW5hYmxlZERheXM6IHN0cmluZztcclxuICBwdWJsaWMgZnJvbTogc3RyaW5nO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHRocmVzaG9sZDogc3RyaW5nO1xyXG4gIHB1YmxpYyB0bzogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5lbmFibGVkRGF5cyA9ICdTdW4sTW9uLFR1ZSxXZWQsVGh1LEZyaSxTYXQnO1xyXG4gICAgdGhpcy5mcm9tID0gJzAwMDAnO1xyXG4gICAgdGhpcy5uYW1lID0gJ0Vhcmx5IG1vcm5pbmcgb2YgZXZlcnlkYXknO1xyXG4gICAgdGhpcy50aHJlc2hvbGQgPSAnNzAsOTAnO1xyXG4gICAgdGhpcy50byA9ICcwNTMwJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJvb21UaW1lQmFzZWRUaHJlc2hvbGQgfTtcclxuIl19