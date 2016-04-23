import { Component, OnInit } from 'angular2/core';
import { ICity } from './icity';
import { WeatherService } from './weather.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Pick a city!</h1>
        <select>
            <option *ngFor="#city of cities" [value]="city">{{city.City}}<option>
        </select>
        <div id="map"></div>
    `,
    providers: [WeatherService]
})

export class AppComponent implements OnInit {
    cities: ICity[];

    constructor(private _weatherService: WeatherService) { }

    ngOnInit() {
        this.getWeather();
    }

    getWeather() {
        this._weatherService
            .getCities()
            .subscribe(
            cities => { this.cities = cities },
            error => console.log(error)
            );

        this.initMap();
    }

    initMap() {
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
    }
}