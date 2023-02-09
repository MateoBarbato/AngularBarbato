import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    console.log(value)
    let result = value+ ' ' +args[0]
    return result
  }

}
