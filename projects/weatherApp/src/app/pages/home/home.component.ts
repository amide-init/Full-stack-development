import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Weather App"
  data;
  cityName = "Delhi"
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWeather();
  }
  
  getWeather() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+this.cityName+"&appid=b326d0250896b8840d30cb1bdd5fcf80"
    this.http.get(url)
      .subscribe(
        res => {
          this.data = res;
        })
  }
}
