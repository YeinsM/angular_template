import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {

  transform(items: any[], status: string): any[] {
    if (!items) {
      return [];
    }
    if (!status || status == "All") {
      return items;
    }
    return items.filter(item => item.status === status);
  }

}