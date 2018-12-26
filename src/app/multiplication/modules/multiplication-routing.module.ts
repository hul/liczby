import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinueGameGuard } from '@core/services/continue-game.guard';
import {
  EndOfMultiplicationRoundComponent,
} from '@multiplication/components/end-of-multiplication-round/end-of-multiplication-round.component';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { MultiplicationComponent } from '@multiplication/components/multiplication/multiplication.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
  },
  {
    path: 'start',
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
