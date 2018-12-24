import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiplicationRoutingModule } from './multiplication-routing.module';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { EndOfMultiplicationRoundComponent } from './end-of-multiplication-round/end-of-multiplication-round.component';
import { LevelService } from '@core/level.service';
import { GameService } from '@core/game.service';
import { AdditionGameService } from '@addition/addition-game.service';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { EquationType } from '@core/equation-type.service';
import { MultiplicationEquationService } from '@app/multiplication/multiplication-equation.service';
import { GameModule } from '@core/game/game.module';
import { StoreModule } from '@ngrx/store';
import { additionReducer } from '@app/store/addition.reducer';
import { MultiplicationGameService } from '@app/multiplication/multiplication-game.service';

@NgModule({
  declarations: [ MultiplicationComponent, EndOfMultiplicationRoundComponent ],
  imports: [
    CommonModule,
    MultiplicationRoutingModule,
    GameModule,
    StoreModule.forFeature('addition', additionReducer),
  ],
  providers: [
    LevelService,
    { provide: GameService, useClass: MultiplicationGameService },
    EndOfRoundGuard,
    { provide: EquationType, useClass: MultiplicationEquationService },
  ],
})
export class MultiplicationModule {
}
