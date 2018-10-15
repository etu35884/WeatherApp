import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  constructor(private http: HttpClient){}

  myWeatherService = new WeatherService(this.http);
  ngOnInit(){
    this.myWeatherService.apiBaseUrl = "http://api.openweathermap.org/data/2.5/forecast";
    this.myWeatherService.apiKey = "dc610799071eb1b6550099bb1b183297";
    this.myWeatherService.getForecast("Namur", "BE").subscribe();
  }
  
}
