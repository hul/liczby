import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dodawanie',
    loadChildren: './addition/addition.module#AdditionModule'
  },
  {
    path: 'odejmowanie',
    loadChildren: './subtraction/subtraction.module#SubtractionModule',
  },
  {
    path: 'mnozenie',
    loadChildren: './multiplication/multiplication.module#MultiplicationModule',
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
