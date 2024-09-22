import { Component, OnInit } from '@angular/core';
import { Car } from '../../../core/models/car.model';
import { CarService } from '../../../core/services/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrl: './car-view.component.scss',
})
export class CarViewComponent implements OnInit {
  cars: Car[] = [];
  selectedYear: number | null = null;
  selectedStatus: string = "";
  options: any[] = [{ label: "All", value: "" },
  { label: "Approved", value: "APPROVED" },
  { label: "Pending Visit", value: "PENDING_VISIT" },
  { label: "Favorite", value: "FAVORITE" },
  { label: "Sold", value: "SOLD" },
  { label: "Cancelled", value: "CANCELLED" },
  { label: "Discarded", value: "DISCARDED" }];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe({
      next: (cars) => (this.cars = cars),
      error: (error) => console.log(error),
    });
  }

  changeStatus(id: number, status: string) {
    this.carService.updateCarStatus(id, status).subscribe({
      next: () => { },
      error: (err) => console.log(err),
      complete: () => {
        Swal.fire('Status changed successfully', '', 'success');
        this.getCars();
      },
    });
  }

  onYearChange(year: string): void {
    this.selectedYear = year ? parseInt(year, 10) : null;
  }

}
