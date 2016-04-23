import { Component, OnInit } from 'angular2/core';
import { ICity } from './icity';
import { WeatherService } from './weather.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First App</h1>
        <br/>
        <h2>Cities: </h2>
        <ul>
            <li *ngFor="#city of cities">
                {{city.city}}
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
        this.cities = this._weatherService.get();
        console.log(this.cities);
    }
}