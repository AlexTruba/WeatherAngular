import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import {WeatherService } from './servive/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  providers:[WeatherService],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

	cityName:string;
	constructor(public router:Router,public weather:WeatherService){ 

	}
	onClick(){
		this.weather.getInfo(this.cityName);
		console.log(this.weather.getInfo(this.cityName));
	}
}
