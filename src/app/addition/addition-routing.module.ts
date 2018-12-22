import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionComponent } from '@app/addition/components/addition.component';
import { ContinueGameGuard } from '@app/addition/continue-game.guard';
import { EndOfRoundComponent } from '@app/components/end-of-round/end-of-round.component';
import { EndOfRoundGuard } from '@app/components/end-of-round/end-of-round.guard';

const routes: Routes = [
  {
    path: '',
    component: AdditionComponent,
    data: { start: true }
  },
  {
    path: 'runda',
    component: AdditionComponent,
    canActivate: [ ContinueGameGuard ],
  },
  {
    path: 'koniec-rundy',
    component: EndOfRoundComponent,
    canActivate: [ EndOfRoundGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdditionRoutingModule { }
