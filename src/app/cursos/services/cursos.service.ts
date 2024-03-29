
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, Subscriber, throwError } from 'rxjs';import { Profesor } from 'src/app/models/profesor';
import { env } from 'src/enviroment/enviroment';
import { Curso } from '../../models/curso';

@Injectable()
export class CursosService {
  constructor
  (private http:HttpClient)
  {}

  obtenerCursosObservable(): Observable<Curso[]>{
   return this.http.get<Curso[]>(`${env.apiURL}/cursos`)
  }

  obtenerProfesoresObservable() : Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${env.api2URL}/profesores`)
  }

  agregarCurso(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>(`${env.apiURL}/cursos`, curso, {
      headers: new HttpHeaders({
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  editarCurso(curso:Curso): Observable<Curso>{
    return this.http.put<Curso>(`${env.apiURL}/cursos/${curso.id}`, curso, {
      headers: new HttpHeaders({
        'usuario': 'Abner'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }


  eliminarCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${env.apiURL}/cursos/${curso.id}`, {
      headers: new HttpHeaders({
        'curso': 'Angular'
      })
    }).pipe(
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



