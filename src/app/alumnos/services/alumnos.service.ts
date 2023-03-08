import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { env } from 'src/enviroment/enviroment';
import { Alumno } from '../../models/alumno';

@Injectable()
export class AlumnosService {


  private alumnos$!:BehaviorSubject<Alumno[]>;


  constructor(
    private http:HttpClient
  ) { 

   }

  obtenerAlumnosObservable(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${env.apiURL}/alumnos`)
  }


  agregarAlumno(alumno:Alumno):Observable<Alumno>{
    return this.http.post<Alumno>(`${env.apiURL}/alumnos`,alumno,{
      headers: new HttpHeaders({
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  editarAlumno( alumno:Alumno):Observable<Alumno>{
    return this.http.put<Alumno>(`${env.apiURL}/cursos/${alumno.id}`, alumno, {
      headers: new HttpHeaders({
      })
    }).pipe(
      catchError(this.capturarError)
    )
    
  }

  eliminarAlumno(alumno:Alumno): Observable<Alumno> {
      return this.http.delete<Alumno>(`${env.apiURL}/alumnos/${alumno.id}`).pipe(
        catchError(this.capturarError)
      );
    }

    private capturarError(error: HttpErrorResponse){
      if(error.error instanceof ErrorEvent){
        alert(`Hubo un error del lado del cliente: ${error.message}`);
      }else{
        alert(`Hubo un error del lado del servidor: ${error.message}`);
      }
  
      return throwError(() => new Error('Error en el procesamiento de cursos'));
    }
}

