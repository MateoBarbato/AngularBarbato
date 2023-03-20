import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(cursos: Curso[], filtro: string):any{
    // return  cursos.pipe(map(cursos=>cursos.filter(curso=>curso.nombre == filtro)))
    if(filtro && cursos){
        return cursos.filter((curso)=>{
         return curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
        })
      }else{
        return cursos
      }
  }

}
