import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, pl_PL } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import {
  FrownFill,
  FrownOutline,
  FrownTwoTone,
  LoadingOutline,
  QuestionCircleFill,
  QuestionCircleOutline,
  QuestionCircleTwoTone,
  SmileFill,
  SmileOutline,
  SmileTwoTone,
} from '@ant-design/icons-angular/icons';

const icons = [
  FrownFill,
  FrownOutline,
  FrownTwoTone,
  LoadingOutline,
  QuestionCircleFill,
  QuestionCircleOutline,
  QuestionCircleTwoTone,
  SmileFill,
  SmileOutline,
  SmileTwoTone,
];

export const providers = [
  { provide: NZ_I18N, useValue: pl_PL },
  { provide: NZ_ICONS, useValue: icons },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule,
  ],
  exports: [
    NgZorroAntdModule,
  ],
})
export class NzCommonModule {
}
