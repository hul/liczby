import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from '@components/navigation/navigation.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [NavigationComponent],
  imports: [ CommonModule, RouterModule, NgZorroAntdModule ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
