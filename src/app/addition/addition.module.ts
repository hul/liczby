import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { additionReducer } from '@app/store/addition.reducer';
import { EquationType } from '@core/equation-type.service';
import { AdditionTypeService } from '@core/addition-type.service';
import { AdditionComponent } from '@app/addition/addition/addition.component';
import { AdditionRoutingModule } from '@app/addition/addition-routing.module';
import { LevelService } from '@core/level.service';
import { GameService } from '@core/game.service';
import { GameModule } from '@core/game/game.module';
import { EndOfAdditionRoundComponent } from '@addition/end-of-addition-round/end-of-addition-round.component';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';

@NgModule({
  declarations: [
    AdditionComponent,
    EndOfAdditionRoundComponent,
  ],
  imports: [
    CommonModule,
    AdditionRoutingModule,
    GameModule,
    StoreModule.forFeature('addition', additionReducer),
  ],
  providers: [
    LevelService,
    GameService,
    EndOfRoundGuard,
    { provide: EquationType, useClass: AdditionTypeService },
  ]
})
export class AdditionModule { }
