import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AdditionComponent } from '@addition/components/addition/addition.component';
import { additionReducer } from '@core/store/addition.reducer';
import { AdditionRoutingModule } from '@addition/modules/addition-routing.module';
import { AdditionTypeService } from '@addition/services/addition-type.service';
import { ContinueGameGuard } from '@core/services/continue-game.guard';
import { CoreModule } from '@core/modules/core.module';
import { EndOfAdditionRoundComponent } from '@addition/components/end-of-addition-round/end-of-addition-round.component';
import { EndOfRoundGuard } from '@components/end-of-round/end-of-round.guard';
import { EquationType } from '@core/services/equation-type.service';
import { GameService } from '@core/services/game.service';
import { LevelService } from '@core/services/level.service';

@NgModule({
  declarations: [
    AdditionComponent,
    EndOfAdditionRoundComponent,
  ],
  imports: [
    CommonModule,
    AdditionRoutingModule,
    CoreModule,
    StoreModule.forFeature('addition', additionReducer),
  ],
  providers: [
    ContinueGameGuard,
    EndOfRoundGuard,
    GameService,
    LevelService,
    { provide: EquationType, useClass: AdditionTypeService },
  ]
})
export class AdditionModule { }
