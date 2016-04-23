import { Injectable } from 'angular2/core';
import { ICity } from './icity';

@Injectable()

export class WeatherService{
    get(){
        var mockedCities: ICity[] = [
            {
                longitude: 151.2313,
                latitude: 33.91741,
                humidity: 82,
                temperature: 18.62,
                city: 'Sydney'
            }
        ];
        return mockedCities;
    }
}