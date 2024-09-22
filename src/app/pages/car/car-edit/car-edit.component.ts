import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../../../core/models/car.model';
import { CarService } from '../../../core/services/car.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrl: './car-edit.component.scss',
})
export class CarEditComponent implements OnInit {
  form!: FormGroup;
  car!: Car;
  submitted = false;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.formInit();

    if (this.id) {
      this.loadCar(this.id);
    }
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
      status: ['PENDING'],
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

    if (this.id) {
      this.editCar(this.id);
    } else {
      this.addCar();
    }
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
        this.router.navigate(['/car']);
      },
    });
  }

  editCar(id: number) {
    this.car = this.form.value ;
    this.carService.updateCar(id, this.car).subscribe({
      next: () => {},
      error: (err) => console.log(err),
      complete: () => {
        Swal.fire('Car edited successfully', '', 'success');
        this.router.navigate(['/car']);
      },
    });
  }

  loadCar(id: number) {
    this.carService.getCarById(id).subscribe({
      next: (car) => {
        this.form.patchValue(car);
      },
      error: (err) => console.log(err),
    });
  }
}
