import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstchar'
})
export class FirstcharPipe implements PipeTransform {

  transform(value: String): any {
    if(value) {
      return value.toString().slice(0, 1).toUpperCase();
    }
  }

}
