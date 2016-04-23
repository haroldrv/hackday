System.register(['angular2/core', "angular2/common", './weather.service'], function(exports_1, context_1) {
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
    var core_1, common_1, weather_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
                AppComponent.prototype.onSelect = function (selectedCity) {
                    //search for city
                    for (var i = 0; i < this.cities.length; i++) {
                        if (this.cities[i].City === selectedCity) {
                            this.selectedCity = this.cities[i];
                            this.initMap(this.selectedCity.Latitude, this.selectedCity.Longitude);
                        }
                    }
                };
                AppComponent.prototype.initMap = function (latitude, longitude) {
                    if (latitude === undefined)
                        latitude = -33.91741;
                    if (longitude === undefined)
                        longitude = 151.2313;
                    var myLatLng = { lat: latitude, lng: longitude };
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
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n        <h1>Pick a city!</h1>\n        <form >\n        <select (change)=\"onSelect($event.target.value)\">\n            <option *ngFor=\"#city of cities\" [value]=\"city.City\">{{city.City}}<option>\n        </select>\n        </form>\n        <div id=\"map\"></div>\n    ",
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