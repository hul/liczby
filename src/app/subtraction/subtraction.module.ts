import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { additionReducer } from '@app/store/addition.reducer';
import { EquationType } from '@core/equation-type.service';
import { GameModule } from '@core/game/game.module';
import { GameService } from '@core/game.service';
import { LevelService } from '@core/level.service';
import { SubtractionComponent } from '@subtraction/subtraction/subtraction.component';
import { SubtractionRoutingModule } from '@subtraction/subtraction-routing.module';
import { SubtractionTypeService } from '@core/subtraction-type.service';
import { EndOfSubtractionRoundComponent } from './end-of-subtraction-round/end-of-subtraction-round.component';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { SubtractionGameService } from '@subtraction/subtraction-game.service';

@NgModule({
  declarations: [
    SubtractionComponent,
    EndOfSubtractionRoundComponent,
  ],
  imports: [
    CommonModule,
    SubtractionRoutingModule,
    GameModule,
    StoreModule.forFeature('addition', additionReducer),
  ],
  providers: [
    LevelService,
    { provide: GameService, useClass: SubtractionGameService },
    EndOfRoundGuard,
    { provide: EquationType, useClass: SubtractionTypeService },
  ],
})
export class SubtractionModule {
}
