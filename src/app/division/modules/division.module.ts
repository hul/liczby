import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { additionReducer } from '@core/store/addition.reducer';
import { ContinueGameGuard } from '@core/services/continue-game.guard';
import { CoreModule } from '@core/modules/core.module';
import { DivisionComponent } from '@division/components/division/division.component';
import { DivisionRoutingModule } from '@division/modules/division-routing.module';
import { DivisionTypeService } from '@division/services/division-type.service';
import { EndOfDivisionRoundComponent } from '@division/components/end-of-division-round/end-of-division-round.component';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { EquationType } from '@core/services/equation-type.service';
import { GameService } from '@core/services/game.service';
import { LevelService } from '@core/services/level.service';

@NgModule({
  declarations: [
    DivisionComponent,
    EndOfDivisionRoundComponent,
  ],
  imports: [
    CommonModule,
    DivisionRoutingModule,
    CoreModule,
    StoreModule.forFeature('addition', additionReducer),
  ],
  providers: [
    ContinueGameGuard,
    EndOfRoundGuard,
    GameService,
    LevelService,
    { provide: EquationType, useClass: DivisionTypeService },
  ],
})
export class DivisionModule {
}
