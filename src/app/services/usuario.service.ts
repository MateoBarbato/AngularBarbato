import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios:Usuario[] = [
    {
      nombre:'Pablo',
      apellido:'Motos',
      logged:true,
      timeStamp:new Date(23,1,2006)
    },
    {
      nombre:'Tarti',
      apellido:'Nurgal',
      logged:false,
      timeStamp:new Date(23,1,2006)
    },
    {
      nombre:'Jorge',
      apellido:'Perla',
      logged:false,
      timeStamp:new Date(23,1,2006)
    },
    {
      nombre:'Juan',
      apellido:'Everche',
      logged:true,
      timeStamp:new Date(23,1,2006)
    },
  ]

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
