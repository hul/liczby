import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionComponent } from '@app/addition/addition/addition.component';
import { EndOfRoundComponent } from '@app/addition/end-of-round/end-of-round.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionComponent,
    data: { start: true }
  },
  {
    path: 'runda',
    component: AdditionComponent
  },
  {
    path: 'koniec-rundy',
    component: EndOfRoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionRoutingModule { }
