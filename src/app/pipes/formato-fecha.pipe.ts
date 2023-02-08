import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(fecha:Date): string {
    let resultado : string;
    resultado = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`
    return resultado
  }

}
