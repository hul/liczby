import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionFormComponent } from '@components/addition-form/addition-form.component';
import { HudComponent } from '@components/hud/hud.component';
import { EndOfRoundComponent } from '@components/end-of-round/end-of-round.component';
import { RoundStatusComponent } from '@components/round-status/round-status.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdditionFormComponent,
    HudComponent,
    EndOfRoundComponent,
    RoundStatusComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  exports: [
    AdditionFormComponent,
    HudComponent,
    EndOfRoundComponent,
    RoundStatusComponent,
    NgZorroAntdModule,
    HttpClientModule,
  ]
})
export class CoreModule {
}
