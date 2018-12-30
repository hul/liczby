import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinueGameGuard } from '@core/services/continue-game.guard';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { EndOfDivisionRoundComponent } from '@app/division/components/end-of-division-round/end-of-division-round.component';
import { DivisionComponent } from '@app/division/components/division/division.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
  },
  {
    path: 'start',
    component: DivisionComponent,
    data: { start: true },
  },
  {
    path: 'runda',
    component: DivisionComponent,
    canActivate: [ ContinueGameGuard ],
  },
  {
    path: 'koniec-rundy',
    component: EndOfDivisionRoundComponent,
    canActivate: [ EndOfRoundGuard ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DivisionRoutingModule {
}
