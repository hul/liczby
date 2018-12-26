import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { additionReducer } from '@core/store/addition.reducer';
import { EndOfMultiplicationRoundComponent } from '../components/end-of-multiplication-round/end-of-multiplication-round.component';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { EquationType } from '@core/services/equation-type.service';
import { CoreModule } from '@core/modules/core.module';
import { GameService } from '@core/services/game.service';
import { LevelService } from '@core/services/level.service';
import { MultiplicationComponent } from '@multiplication/components/multiplication/multiplication.component';
import { MultiplicationEquationService } from '@multiplication/services/multiplication-equation.service';
import { MultiplicationRoutingModule } from '@multiplication/modules/multiplication-routing.module';


@NgModule({
  declarations: [ MultiplicationComponent, EndOfMultiplicationRoundComponent ],
  imports: [
    CommonModule,
    MultiplicationRoutingModule,
    CoreModule,
    StoreModule.forFeature('addition', additionReducer),
  ],
  providers: [
    LevelService,
    GameService,
    EndOfRoundGuard,
    { provide: EquationType, useClass: MultiplicationEquationService },
  ],
})
export class MultiplicationModule {
}
