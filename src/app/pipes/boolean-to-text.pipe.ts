import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToText'
})
export class BooleanToTextPipe implements PipeTransform {

  transform(valueBoolean: boolean, ...args: any[]): string {
    return valueBoolean? args[0] : args[1]
  }

}
