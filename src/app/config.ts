import { InjectionToken } from "@angular/core";
import { Configuracion } from "./models/configuracion";
import { CursosService } from "./services/cursos.service";
import { UsuarioService } from "./services/usuario.service";


export const config:Configuracion = {
    urlAPI:'https://data.mockapi.io',
    servicios : {
        cursoService: new CursosService(),
        usuarioService: new UsuarioService()

    }
}

export const token = new InjectionToken<Configuracion> ('Config')