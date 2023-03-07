import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesion$!: BehaviorSubject<Sesion>
  constructor() {
    let sesion : Sesion = {
      sesionActiva:false,
    };

    this.sesion$ = new BehaviorSubject<Sesion>(sesion);
   }

   crearSesion(sesion:Sesion){
    console.log('creando sesion con' , sesion)
    this.sesion$.next(sesion);
   }

   obtenerSesion() : Observable<Sesion>{
    return this.sesion$.asObservable()
   }

}
