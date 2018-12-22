import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionComponent } from '@app/addition/addition/addition.component';
import { EndOfRoundComponent } from '@app/addition/end-of-round/end-of-round.component';
import { EndOfRoundGuard } from '@app/addition/end-of-round/end-of-round.guard';
import { ContinueGameGuard } from '@app/addition/addition/continue-game.guard';

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
