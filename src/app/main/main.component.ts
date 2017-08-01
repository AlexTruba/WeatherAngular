import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'main-root',
  templateUrl: "main.component.html",
  styleUrls: ["main.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {

	cityName:string;
	constructor(public router:Router){ 
	}
	onClick(){
		this.router.navigate(["/detail",this.cityName])
	}
}
