import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from './../../../../models/interfaces/WeatherDatas';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherDatas;
  //Dados da previsãoo do tempo recebido pelo componente pai

  minTemperatureIcon = faTemperatureLow;
  maxTemperatuewIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
