import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumber'
})
export class RoundNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   return Math.round( (value as number)* 10 ) / 10;
  }

}
