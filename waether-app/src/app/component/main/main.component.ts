import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cityName: string = "Kolkata"
  baselink: string = "https://api.openweathermap.org/data/2.5/weather";
  apiKey: string = "b326d0250896b8840d30cb1bdd5fcf80";
  data;
  constructor(private ws: WeatherService) { }

  ngOnInit(): void {
  }

  fetchWeather() {
    var url = `${this.baselink}?q=${this.cityName}&appid=${this.apiKey}`
    this.ws.getWeatherDetails(url)
      .subscribe(
       res => {
          this.data = res;
        },
        err => {
          this.data = err;
        }
      )
  }






}
