import { InjectionToken } from "@angular/core";
import { Configuracion } from "./models/configuracion";
import { UsuarioService } from "./core/services/usuario.service";


export const config:Configuracion = {
    urlAPI:'https://data.mockapi.io',
    servicios : {
        usuarioService: new UsuarioService()

    }
}

export const token = new InjectionToken<Configuracion> ('Config')