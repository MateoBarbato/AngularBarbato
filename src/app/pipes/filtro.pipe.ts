import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../models/curso';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(cursos: Curso[], filtro: string): Curso[] {
    if(filtro){
      return cursos.filter((curso)=>{
       return curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
      })
    }else{
      return cursos
    }
  }

}
