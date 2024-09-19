import { Component, OnInit } from '@angular/core';
import { Car } from '../../../core/models/car.model';
import { CarService } from '../../../core/services/car.service';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrl: './car-view.component.scss',
})
export class CarViewComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe({
      next: (cars) => (this.cars = cars),
      error: (error) => console.error(error),
    });
  }
}
