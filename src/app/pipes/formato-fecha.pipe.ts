import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(fecha:string): string {
    let resultado : string;
    resultado = fecha.slice(0,10)
    return resultado
  }

}
