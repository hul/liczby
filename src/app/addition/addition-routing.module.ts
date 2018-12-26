import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionComponent } from '@addition/addition/addition.component';
import { ContinueGameGuard } from '@core/continue-game.guard';
import { EndOfAdditionRoundComponent } from '@addition/end-of-addition-round/end-of-addition-round.component';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
  },
  {
    path: 'start',
    component: AdditionComponent,
    data: { start: true },
  },
  {
    path: 'runda',
    component: AdditionComponent,
    canActivate: [ ContinueGameGuard ],
  },
  {
    path: 'koniec-rundy',
    component: EndOfAdditionRoundComponent,
    canActivate: [ EndOfRoundGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionRoutingModule { }
