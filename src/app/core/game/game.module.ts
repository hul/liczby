import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionFormComponent } from '@components/addition-form/addition-form.component';
import { HudComponent } from '@components/hud/hud.component';
import { EndOfRoundComponent } from '@components/end-of-round/end-of-round.component';
import { RoundStatusComponent } from '@components/round-status/round-status.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdditionFormComponent,
    HudComponent,
    EndOfRoundComponent,
    RoundStatusComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    AdditionFormComponent,
    HudComponent,
    EndOfRoundComponent,
    RoundStatusComponent,
  ],
})
export class GameModule {
}
