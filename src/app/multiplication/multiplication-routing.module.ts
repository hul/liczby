import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicationComponent } from '@app/multiplication/multiplication/multiplication.component';
import { ContinueGameGuard } from '@core/continue-game.guard';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { EndOfMultiplicationRoundComponent } from '@app/multiplication/end-of-multiplication-round/end-of-multiplication-round.component';

const routes: Routes = [
  {
    path: '',
    component: MultiplicationComponent,
    data: { start: true },
  },
  {
    path: 'runda',
    component: MultiplicationComponent,
    canActivate: [ ContinueGameGuard ],
  },
  {
    path: 'koniec-rundy',
    component: EndOfMultiplicationRoundComponent,
    canActivate: [ EndOfRoundGuard ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class MultiplicationRoutingModule {
}
