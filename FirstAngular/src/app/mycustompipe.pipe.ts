import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustompipe'
})
export class MycustompipePipe implements PipeTransform {

  transform(value:string): string {

    let val = value.charAt(0);
    val = val.toUpperCase();
    return val+value.toString().substring(1);
  }

}
