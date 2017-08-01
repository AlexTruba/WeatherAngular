import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { LocalDayPipe } from './pipe/local-day.pipe';
import { WeatherStatePipe } from './pipe/weather-state.pipe';
import { RoundNumberPipe } from './pipe/round-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MainComponent,
    LocalDayPipe,
    WeatherStatePipe,
    RoundNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
