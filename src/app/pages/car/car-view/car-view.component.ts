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
  searchTerm: string = '';
  cars: Car[] = [];
  selectedYear: number | null = null;
  selectedStatus: string = '';
  options: any[] = [
    { label: 'All', value: '' },
    { label: 'Approved', value: 'APPROVED' },
    { label: 'Pending Visit', value: 'PENDING_VISIT' },
    { label: 'Favorite', value: 'FAVORITE' },
    { label: 'Sold', value: 'SOLD' },
    { label: 'Cancelled', value: 'CANCELLED' },
    { label: 'Discarded', value: 'DISCARDED' },
  ];

  filteredCars = this.cars;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe({
      next: (cars) => {
        this.cars = cars.sort((a, b) => {
          const statusOrder = [
            'APPROVED',
            'PENDING_VISIT',
            'FAVORITE',
            'CANCELLED',
            'DISCARDED',
            'SOLD',
          ];

          // Compara los índices de los estados en el array statusOrder
          return (
            statusOrder.indexOf(a.status!) - statusOrder.indexOf(b.status!)
          );
        });
      },
      error: (error) => console.log(error),
    });
  }

  changeStatus(id: number, status: string) {
    this.carService.updateCarStatus(id, status).subscribe({
      next: () => {},
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

  // Método para calcular el severity basado en el estado
  getSeverity(status: string): any {
    switch (status) {
      case 'APPROVED':
        return 'success'; // Por ejemplo, verde para aprobado
      case 'FAVORITE':
        return 'info'; // Azul para favorito
      case 'DISCARDED':
        return 'danger'; // Gris para descartado
      case 'PENDING_VISIT':
        return 'warning'; // Amarillo para pendiente de visita
      case 'SOLD':
        return 'contrast'; // Rojo para vendido
      case 'CANCELLED':
        return 'help'; // Azul para cancelado
      default:
        return 'secondary'; // Un valor por defecto
    }
  }
}
