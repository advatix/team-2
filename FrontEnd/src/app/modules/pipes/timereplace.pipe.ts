import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timereplace'
})
export class TimereplacePipe implements PipeTransform {

  transform(value: String): any {
    if(value) {
      let regex = new RegExp('-', 'g');
      return value.toString().slice(0, 19).replace(regex, '/');
    }
  }

}
