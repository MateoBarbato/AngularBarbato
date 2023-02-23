import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../../models/curso';

@Injectable()
export class CursosService {
  private cursos:Curso[] = [
    {nombre:'Angular',
    comision:'49512',
    profesor:{
      nombre:'Abner',
      correo:"asdas@gmail.com",
      fechaRegistro: new Date(2022,7,14)},
    inscripcionAbierta:true,
    fechaInicio: new Date(2023, 0,31),
    fechaFin: new Date(2023,2,28)
    },
    {nombre:'Angular',
    comision:'614213',
    profesor:{
      nombre:'Abner',
      correo:"asdas@gmail.com",
      fechaRegistro: new Date(2022,7,14)},
    inscripcionAbierta:false,
    fechaInicio: new Date(2023, 0,31),
    fechaFin: new Date(2023,2,28)
    },
    {nombre:'React',
    comision:'123123',
    profesor:{
      nombre:'Caro',
      correo:"a4123asdas@gmail.com",
      fechaRegistro: new Date(2022,7,14)},
    inscripcionAbierta:true,
    fechaInicio: new Date(2023, 6,31),
    fechaFin: new Date(2023,8,28)
    },
    {nombre:'React',
    comision:'123123',
    profesor:{
      nombre:'Caro',
      correo:"a4123asdas@gmail.com",
      fechaRegistro: new Date(2022,7,14)},
    inscripcionAbierta:true,
    fechaInicio: new Date(2023, 6,31),
    fechaFin: new Date(2023,8,28)
    },
  ]
  private cursos$:BehaviorSubject<Curso[]>

  constructor() { 
    this.cursos$ = new BehaviorSubject(this.cursos)
   }

  obtenerCursosObservable(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  agregarCurso(curso:Curso){
    this.cursos.push(curso)
    this.cursos$.next(this.cursos)
    console.log('Curso agregado',this.cursos)
  }

  editarCurso( curso:Curso):void{
    let indice = this.cursos.findIndex((c:Curso)=> c.comision === curso.comision)

    if(indice > -1){
      this.cursos[indice] = curso;
      this.cursos$.next(this.cursos);
    }
  }

  eliminarCurso(curso:Curso):void {
    let indice = this.cursos.findIndex((c:Curso)=> c.comision === curso.comision)

    if(indice > -1){
      this.cursos.splice(indice,1);
      this.cursos$.next(this.cursos);
    }

  }
}
