import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {


  transform(list: any[], filterText: string): any {
    if (filterText === '') {
      return list
    } else {
      let normalizedText = filterText.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
      return list.filter(item => item.NOMBRE_PROVINCIA.normalize("NFD").replace(/[\u0300-\u036f]/g, '').search(new RegExp(normalizedText, 'iu')) > -1);
    }
  }

}
