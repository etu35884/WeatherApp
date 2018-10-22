import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Forecast } from './model/OpenWeatherModel';
import { Location, formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  forecast: Forecast;
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  times = new Array();
  posDay = new Array();

  constructor(private myWeatherService: WeatherService){}

  ngOnInit(){
    this.myWeatherService.apiBaseUrl = "http://api.openweathermap.org/data/2.5/forecast";
    this.myWeatherService.apiKey = "dc610799071eb1b6550099bb1b183297";
    this.myWeatherService.getForecast("Namur", "BE").subscribe((data) => {
      this.forecast = data;
      var date = new Date(this.forecast.list[0].dt * 1000);
      var datePrec = date;
      var dayName = this.days[date.getDay()];
      var dayEnd = date.getDate() + 3;
      var dateNext = new Date(this.forecast.list[1].dt * 1000);
      this.times.push(dayName + ", " + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
      this.posDay.push(1);

      for(var i = 0; dateNext.getDate() < dayEnd; i++){
        if(datePrec.getDate() < dateNext.getDate()){
          this.times.push(this.days[dateNext.getDay()] + ", " + dateNext.getDate() + "-" + (dateNext.getMonth() + 1) + "-" + dateNext.getFullYear());
          this.posDay.push(i);
          datePrec = dateNext;
        }
        dateNext = new Date(this.forecast.list[i].dt * 1000);
      }
    });
  }
  
}
