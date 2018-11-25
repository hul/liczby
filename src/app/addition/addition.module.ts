import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AdditionComponent } from '@app/addition/addition/addition.component';
import { additionReducer } from '@app/addition/addition.reducer';
import { AdditionRoutingModule } from '@app/addition/addition-routing.module';
import { AdditionFormComponent } from '@app/addition/addition-form/addition-form.component';
import { HudComponent } from './hud/hud.component';
import { EndOfRoundComponent } from './end-of-round/end-of-round.component';

@NgModule({
  declarations: [
    AdditionComponent,
    AdditionFormComponent,
    HudComponent,
    EndOfRoundComponent
  ],
  imports: [
    AdditionRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('addition', additionReducer),
  ]
})
export class AdditionModule { }
