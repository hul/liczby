import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionComponent } from '@app/addition/addition/addition.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionRoutingModule { }
