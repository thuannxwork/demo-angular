import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getTemp('Tokyo')
    .then(temp => console.log(temp))
    .catch(err => console.error(err));
  }

  txtCityName = '';
  cityName = '';
  temp = null;
  getWeather(){
    this.weatherService.getTemp(this.txtCityName)
    .then(temp => {
      this.cityName = this.txtCityName;
      this.temp = temp;
    })
    .catch(err => {
      alert('Không thể tra cứu được thời tiết vào lúc này!!!')
    });
  }

}
