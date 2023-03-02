import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../../models/alumno';

@Injectable()
export class AlumnosService {

  private alumnos:Alumno[] = [
    { id:1,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:2,
    nombre:'Pedro',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:3,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:4,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:5,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:6,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:7,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:8,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:9,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:10,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:11,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:12,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:13,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:14,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:15,
    nombre:'Angel',
    apellido:'Perez',
    inscripcionAbierta:true,
    edad:21,
    sexo:'Hombre',
    validado:true
    },
    { id:16,
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
    let indice = this.alumnos.findIndex((a:Alumno)=> a.id === alumno.id)

    if(indice > -1){
      this.alumnos[indice] = alumno;
      this.alumnos$.next(this.alumnos);
      console.log('Alumno agregado',this.alumnos)
    }else{
      console.log('No encontro el indice')

    }
    
  }

  eliminarCurso(id:number):void {
    let indice = this.alumnos.findIndex((a:Alumno)=> a.id === id)

    if(indice > -1){
      this.alumnos.splice(indice,1);
      this.alumnos$.next(this.alumnos);
    }else{
      console.log('No encontro el indice')

    }

  }
}

