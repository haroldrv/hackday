import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { ICity } from './icity';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class WeatherService {
    private _apiUrl: string = 'http://hackdayapi.azurewebsites.net/api/weather';

    constructor(private _http: Http) { }

    // get() {
    //     var mockedCities: ICity[] = [
    //         {
    //             longitude: 151.2313,
    //             latitude: 33.91741,
    //             humidity: 82,
    //             temperature: 18.62,
    //             city: 'Sydney'
    //         }
    //     ];
    //     return mockedCities;
    // }

    getCities(): Observable<ICity[]> {
        return this._http
            .get(this._apiUrl)
            .map(this.extractCities)
            .catch(this.handleError);
    }

    private extractCities(response: Response) : ICity[] {
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Bad response status: ' + response.status);
        }
        let body = response.json();
        return body;
    }

    private handleError(error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}