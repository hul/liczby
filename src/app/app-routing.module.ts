import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dodawanie',
    loadChildren: './addition/modules/addition.module#AdditionModule',
  },
  {
    path: 'odejmowanie',
    loadChildren: './subtraction/modules/subtraction.module#SubtractionModule',
  },
  {
    path: 'mnozenie',
    loadChildren: './multiplication/modules/multiplication.module#MultiplicationModule',
  },
  {
    path: 'dzielenie',
    loadChildren: './division/modules/division.module#DivisionModule',
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
