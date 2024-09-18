import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarViewComponent } from './car-view/car-view.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CarViewComponent, CarEditComponent],
  imports: [CommonModule, CarRoutingModule, SharedModule],
})
export class CarModule {}
