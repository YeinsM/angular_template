import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarViewComponent } from './car-view/car-view.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [CarViewComponent, CarEditComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputTextareaModule,
    FloatLabelModule,
    InputTextModule
  ],
})
export class CarModule {}
