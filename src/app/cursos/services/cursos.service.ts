
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subscriber, throwError } from 'rxjs';import { env } from 'src/enviroment/enviroment';
import { Curso } from '../../models/curso';

@Injectable()
export class CursosService {
  constructor
  (private http:HttpClient) 
  {}

  obtenerCursosObservable(): Observable<Curso[]>{
   return this.http.get<Curso[]>(`${env.apiURL}cursos`)
  }

  agregarCurso(curso:Curso):void{

  }

  editarCurso(curso:Curso):void{

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



