import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import pl from '@angular/common/locales/pl';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@app/components/navigation/navigation.module';
import { registerLocaleData } from '@angular/common';

import { NzCommonModule, providers as nzProviders } from '@core/modules/nz-common.module';

registerLocaleData(pl);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NavigationModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    NzCommonModule,
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ...nzProviders,
  ],
})
export class AppModule { }
