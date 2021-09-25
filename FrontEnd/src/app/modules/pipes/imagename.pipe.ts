import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagename'
})
export class ImageNamePipe implements PipeTransform {

  transform(value: String): any {
    if(value) {
      var str = value.replace(/\s+/g, '_');
      return str.toUpperCase();
    }
  }

}
