<<<<<<< HEAD
import { Component } from '@angular/core';
import { Car, fakeCarList } from '../../../core/models/car.model';
=======
import { Component, OnInit } from '@angular/core';
import { Car } from '../../../core/models/car.model';
import { CarService } from '../../../core/services/car.service';
>>>>>>> 81d449b700df76efd666422720eb50ff60cb9bf3

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrl: './car-view.component.scss',
})
<<<<<<< HEAD
export class CarViewComponent {
  cars: Car[] = fakeCarList;

  constructor() {}

  getCars(): Car[] {
    return this.cars;
  }

  
=======
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
>>>>>>> 81d449b700df76efd666422720eb50ff60cb9bf3
}
