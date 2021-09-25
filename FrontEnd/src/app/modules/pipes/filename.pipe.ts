import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filename'
})
export class FilenamePipe implements PipeTransform {

  transform(value: String): any {
    if(value) {
      return value.toString().split("/").pop();
    }
  }

}
