import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AdditionComponent } from '@app/addition/components/addition.component';
import { AdditionFormComponent } from '@app/components/addition-form/addition-form.component';
import { additionReducer } from '@app/addition/store/addition.reducer';
import { AdditionRoutingModule } from '@addition/addition-routing.module';
import { EndOfRoundComponent } from '@components/end-of-round/end-of-round.component';
import { HudComponent } from '@components/hud/hud.component';
import { RoundStatusComponent } from '@components/round-status/round-status.component';

@NgModule({
  declarations: [
    AdditionComponent,
    AdditionFormComponent,
    HudComponent,
    EndOfRoundComponent,
    RoundStatusComponent
  ],
  imports: [
    AdditionRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('addition', additionReducer),
  ]
})
export class AdditionModule { }
