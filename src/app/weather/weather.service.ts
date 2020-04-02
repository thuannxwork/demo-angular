import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable()

export class WeatherService {
    constructor(private http: Http) {

    }

    getTemp(cityName: string) {
        const url = "https://api.openweathermap.org/data/2.5/weather?appid=9837f9ff93fe008f7a60f907606e5d78&lang=vi&units=metric&q=" + cityName;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json())
            .then(resJson => resJson.main.temp);
    }
}