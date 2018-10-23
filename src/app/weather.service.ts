import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast, ActualWeather } from './model/OpenWeatherModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiBaseUrl: string;
  apiKey: string;

  constructor(private http: HttpClient) {   }

  getForecast(cityName: string, countryIsoCode: string): Observable<Forecast>{
    return this.http.get<Forecast>(`${this.apiBaseUrl}?q=${cityName},${countryIsoCode}&units=metric&lang=en&APPID=${this.apiKey}`);
  }

  getWeather(cityName: string, countryIsoCode: string): Observable<ActualWeather>{
    return this.http.get<ActualWeather>(`${this.apiBaseUrl}?q=${cityName},${countryIsoCode}&units=metric&lang=en&APPID=${this.apiKey}`);
  }
}
