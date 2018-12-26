import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { additionReducer } from '@core/store/addition.reducer';
import { ContinueGameGuard } from '@core/services/continue-game.guard';
import { CoreModule } from '@core/modules/core.module';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { EndOfSubtractionRoundComponent } from '@subtraction/components/end-of-subtraction-round/end-of-subtraction-round.component';
import { EquationType } from '@core/services/equation-type.service';
import { GameService } from '@core/services/game.service';
import { LevelService } from '@core/services/level.service';
import { SubtractionComponent } from '@subtraction/components/subtraction/subtraction.component';
import { SubtractionRoutingModule } from '@subtraction/modules/subtraction-routing.module';
import { SubtractionTypeService } from '@subtraction/services/subtraction-type.service';

@NgModule({
  declarations: [
    SubtractionComponent,
    EndOfSubtractionRoundComponent,
  ],
  imports: [
    CommonModule,
    SubtractionRoutingModule,
    CoreModule,
    StoreModule.forFeature('addition', additionReducer),
  ],
  providers: [
    ContinueGameGuard,
    LevelService,
    GameService,
    EndOfRoundGuard,
    { provide: EquationType, useClass: SubtractionTypeService },
  ],
})
export class SubtractionModule {
}
