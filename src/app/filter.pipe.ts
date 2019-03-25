import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterText: string): any[] {
    if (!items) {
      return [];
    }
    if (!filterText || filterText.length < 3) {
      return items;
    }
    filterText = filterText.toString().toLowerCase();
    return items.filter(it => {
      return it.name.toString().toLowerCase().includes(filterText);
    });
  }
}
