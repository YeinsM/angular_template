import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByUrl'
})
export class FilterByUrlPipe implements PipeTransform {

  transform(cars: any[], searchValue: string): any[] {
    if (!cars || !searchValue) {
      return cars;  // Si no hay búsqueda, devuelve la lista completa
    }

    // Filtra los carros según si la búsqueda está incluida en la propiedad `url`
    return cars.filter(car => car.url.includes(searchValue));
  }
}
