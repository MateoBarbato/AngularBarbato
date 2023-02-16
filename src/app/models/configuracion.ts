import { CursosService } from "../services/cursos.service"
import { UsuarioService } from "../services/usuario.service"

export interface Configuracion {
    urlAPI:string,
    servicios:{
        cursoService:CursosService,
        usuarioService:UsuarioService
    }
}