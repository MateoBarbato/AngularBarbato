import { UsuarioService } from "../core/services/usuario.service"

export interface Configuracion {
    urlAPI:string,
    servicios:{
        usuarioService:UsuarioService
    }
}