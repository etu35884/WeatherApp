import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActualWeather } from '../model/OpenWeatherModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cities: string[];
  keys: string[];
  weathers: ActualWeather[];

  constructor(private myWeatherService: WeatherService) { }

  ngOnInit() {
    this.weathers = new Array();
    let myStorage = window.localStorage;
    this.cities = this.allStorage();
    this.keys = Object.keys(localStorage);
    this.myWeatherService.apiBaseUrl = "http://api.openweathermap.org/data/2.5/weather";
    this.myWeatherService.apiKey = "dc610799071eb1b6550099bb1b183297";
    for(var i = 0; i < this.cities.length; i++){
      this.myWeatherService.getWeather(this.keys[i], this.cities[i]).subscribe((data) => {
        this.weathers.push(data);
      });
    }
  }

  allStorage() {

    var values = [],
        keys = Object.keys(localStorage);
        var i = 0;

    while (i < keys.length) {
        values.push( localStorage.getItem(keys[i]) );
        i++;
    }

    return values;
  }

  capitalizeFirstLetter(str: string){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
