import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../../models/alumno';

@Injectable()
export class AlumnosService {

  private alumnos:Alumno[] = [
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Pedro',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    {nombre:'Angel',
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

  agregarAlumno(alumno:Alumno){
    this.alumnos.push(alumno)
    this.alumnos$.next(this.alumnos);
    console.log('Alumno agregado',this.alumnos)
  }
}
