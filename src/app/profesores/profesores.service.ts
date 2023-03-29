import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { env } from 'src/enviroment/enviroment';
import { Profesor } from '../models/profesor';

@Injectable()
export class ProfesoresService {

  constructor(
    private http: HttpClient
  ) { }

  getProfesores() : Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${env.api2URL}/profesores`)
  }
}
