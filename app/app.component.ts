import { Component, OnInit } from 'angular2/core';
import {FORM_DIRECTIVES} from "angular2/common";
import { ICity } from './icity';
import { WeatherService } from './weather.service';

@Component({
    selector: 'my-app',
    directives: [FORM_DIRECTIVES],
    template: `
        <h1>Pick a city!</h1>
        <form >
        <select (change)="onSelect($event.target.value)">
            <option *ngFor="#city of cities" [value]="city.City">{{city.City}}<option>
        </select>
        </form>
        <div id="map"></div>
    `,
    providers: [WeatherService]
})

export class AppComponent implements OnInit {
    cities: ICity[];
    selectedCity: ICity;

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

    onSelect(selectedCity: string) {
        //search for city
        for (var i = 0; i < this.cities.length; i++) {
            if (this.cities[i].City === selectedCity) {
                this.selectedCity = this.cities[i];
                this.initMap(this.selectedCity.Latitude, this.selectedCity.Longitude);
            }
        }
    }

    initMap(latitude?: number, longitude?: number) {
        if(latitude === undefined)
            latitude = -33.91741;
        if(longitude === undefined)
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
    }
}