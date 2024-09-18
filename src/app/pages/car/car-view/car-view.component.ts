import { Component } from '@angular/core';
import { Car, fakeCarList } from '../../../core/models/car.model';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrl: './car-view.component.scss',
})
export class CarViewComponent {
  cars: Car[] = fakeCarList;

  constructor() {}

  getCars(): Car[] {
    return this.cars;
  }

  
}
