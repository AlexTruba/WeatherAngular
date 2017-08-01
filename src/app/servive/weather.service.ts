import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class WeatherService {
	
	public isError:boolean = false;

	constructor(private http:HttpClient) { 
	}

	getInfo(cityName:string){
	    return this.http.get("http://localhost:10490/api/WeatherInfoApi/GetItem?city="+cityName+"&day=7")
	}
}
