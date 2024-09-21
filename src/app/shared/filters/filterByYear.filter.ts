import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByYearAsc'
})
export class FilterByYearAscPipe implements PipeTransform {

  transform(items: any[], year: number): any[] {
    if (!items) {
      return [];
    }
    if (!year) {
      return items;
    }
    return items.filter(item => item.year === year).sort((a, b) => a.year - b.year);
  }

}