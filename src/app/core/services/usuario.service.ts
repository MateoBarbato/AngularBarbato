import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios:Usuario[] = []

  constructor() { }

  obtenerUsuariosPromise():Promise<Usuario[]>{
    return new Promise((resolve,reject) => {
      if(this.usuarios.length>0){
        resolve(this.usuarios)
      }else{
        reject([{
          code:0,
          error:'El array de usuarios estaba vacio',
          arrayusuarios:[this.usuarios]
        }])
      }
    })
  }
}
