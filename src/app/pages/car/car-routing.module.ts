import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarViewComponent } from './car-view/car-view.component';
import { CarEditComponent } from './car-edit/car-edit.component';

const routes: Routes = [
  { path: '', component: CarViewComponent },
  { path: 'edit', component: CarEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
