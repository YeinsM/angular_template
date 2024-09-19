import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../../../core/models/car.model';
import { CarService } from '../../../core/services/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrl: './car-edit.component.scss',
})
export class CarEditComponent implements OnInit {
  form!: FormGroup;
  car!: Car;
  submitted = false;

  constructor(private fb: FormBuilder, private carService: CarService) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.form = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      initial: [''],
      url: ['', Validators.required],
      vin: [''],
      evaluation: [''],
      img_url: [''],
      comment: [''],
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.addCar();
  }

  get f() {
    return this.form.controls;
  }

  addCar() {
    this.car = this.form.value;
    this.carService.createCar(this.car).subscribe({
      next: () => {},
      error: (err) => console.log(err),
      complete: () => {
        Swal.fire('Car added successfully', '', 'success');
      },
    });
  }
}
