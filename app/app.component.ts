import { Component, OnInit } from 'angular2/core';
import { ICity } from './icity';
import { WeatherService } from './weather.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Pick a city!</h1>
        <ul>
            <li *ngFor="#city of cities">
                {{city.City}}
            </li>
        </ul>
    `,
    providers: [WeatherService]
})

export class AppComponent implements OnInit {
    cities: ICity[]; 
    
    constructor(private _weatherService: WeatherService) { }
    
    ngOnInit(){
        this.getWeather();
    }
    
    getWeather(){
        this._weatherService
            .getCities()
            .subscribe(
                cities => {this.cities = cities},
                error => console.log(error)
            );
    }
}