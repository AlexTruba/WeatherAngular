import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WeatherService } from '../servive/weather.service';
import {ViewEncapsulation} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: "detail.component.html",
  providers:[WeatherService],
  styleUrls: ["detail.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DetailComponent implements OnInit {

  private cityName:string;
  private weatherInfo:any = undefined;
  private activeDay:number = 0;
  private isError:boolean = false;

  constructor(private router:ActivatedRoute, private weather:WeatherService) { 
    this.router
      .params
      .subscribe(params => {
         this.cityName = params['name'];
      });
  }

  ngOnInit() {
    this.weather
      .getInfo(this.cityName)
      .subscribe(
        data => this.weatherInfo = data,
        err=> err.status ==404 ? this.weatherInfo = null : this.isError = true 
       );
  }

  changeActiveDay(index:number){
    this.activeDay = index;
  }
}
