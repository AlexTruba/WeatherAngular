import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {MainComponent} from './main/main.component';
import {AppComponent} from './app.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo : "/main",
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'detail/:name',
    component: DetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
