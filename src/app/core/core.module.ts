import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelModule } from '@app/core/level/level.module';
import { NavigationModule } from '@app/components/navigation/navigation.module';

@NgModule({
  declarations: [],
  imports: [ CommonModule, LevelModule, NavigationModule ],
  exports: [ LevelModule, NavigationModule ],
})
export class CoreModule { }
