import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../../models/alumno';

@Injectable()
export class AlumnosService {

  private alumnos:Alumno[] = [
    { index:1,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:2,
    nombre:'Pedro',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:3,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:4,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:5,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:6,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:7,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:8,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:9,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:10,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:11,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:12,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:13,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:14,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:15,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { index:16,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    }]

  private alumnos$!:BehaviorSubject<Alumno[]>;


  constructor() { 

    this.alumnos$ = new BehaviorSubject(this.alumnos);
   }

  obtenerAlumnosObservable(): Observable<Alumno[]>{
    return this.alumnos$.asObservable();
  }
  obtenerAlumnos(): Alumno[]{
    return this.alumnos
  }

  agregarAlumno(alumno:Alumno){
    this.alumnos.push(alumno)
    this.alumnos$.next(this.alumnos);
    console.log('Alumno agregado',this.alumnos)
  }

  editarAlumno( alumno:Alumno):void{
    console.log(alumno)
    let indice = this.alumnos.findIndex((a:Alumno)=> a.index === alumno.index)

    if(indice > -1){
      this.alumnos[indice] = alumno;
      this.alumnos$.next(this.alumnos);
      console.log('Alumno agregado',this.alumnos)
    }else{
      console.log('No encontro el indice')

    }
    
  }

  eliminarCurso(id:number):void {
    let indice = this.alumnos.findIndex((a:Alumno)=> a.index === id)

    if(indice > -1){
      this.alumnos.splice(indice,1);
      this.alumnos$.next(this.alumnos);
    }else{
      console.log('No encontro el indice')

    }

  }
}

