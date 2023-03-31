import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios:Usuario[] = []

  constructor(
    private http:HttpClient
  ) { }

  obtenerUsuariosObservable():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${env.api2URL}/users`)
  }

}
