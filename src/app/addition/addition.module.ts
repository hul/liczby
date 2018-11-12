import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AdditionComponent } from './addition/addition.component';
import { additionReducer } from '@app/addition/addition.reducer';
import { AdditionRoutingModule } from './addition-routing.module';
import { OperationFormComponent } from './components/operation-form/operation-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdditionComponent, OperationFormComponent],
  imports: [
    AdditionRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('addition', additionReducer),
  ]
})
export class AdditionModule { }
