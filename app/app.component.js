System.register(['angular2/core', './weather.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getWeather();
                };
                AppComponent.prototype.getWeather = function () {
                    var _this = this;
                    this._weatherService
                        .getCities()
                        .subscribe(function (cities) { _this.cities = cities; }, function (error) { return console.log(error); });
                    this.initMap();
                };
                AppComponent.prototype.initMap = function () {
                    var myLatLng = { lat: -25.363, lng: 131.044 };
                    var map = new window.google.maps.Map(document.getElementById('map'), {
                        zoom: 4,
                        center: myLatLng
                    });
                    var marker = new window.google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: 'Hello World!'
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Pick a city!</h1>\n        <select>\n            <option *ngFor=\"#city of cities\" [value]=\"city\">{{city.City}}<option>\n        </select>\n        <div id=\"map\"></div>\n    ",
                        providers: [weather_service_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map