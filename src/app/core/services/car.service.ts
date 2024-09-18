import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'https://api.example.com/cars'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Get all cars
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  // Get car by ID
  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  // Create a new car
  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }

  // Update an existing car
  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, car);
  }

  // Delete a car
  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
