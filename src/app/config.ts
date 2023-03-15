import { InjectionToken } from "@angular/core";
import { Configuracion } from "./models/configuracion";


export const config:Configuracion = {
    urlAPI:'https://data.mockapi.io',
}

export const token = new InjectionToken<Configuracion> ('Config')