import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinueGameGuard } from '@core/continue-game.guard';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { EndOfSubtractionRoundComponent } from '@subtraction/end-of-subtraction-round/end-of-subtraction-round.component';
import { SubtractionComponent } from '@app/subtraction/subtraction/subtraction.component';

const routes: Routes = [
  {
    path: '',
    component: SubtractionComponent,
    data: { start: true },
  },
  {
    path: 'runda',
    component: SubtractionComponent,
    canActivate: [ ContinueGameGuard ],
  },
  {
    path: 'koniec-rundy',
    component: EndOfSubtractionRoundComponent,
    canActivate: [ EndOfRoundGuard ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class SubtractionRoutingModule {
}
