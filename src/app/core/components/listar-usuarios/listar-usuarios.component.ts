import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios!:Usuario[]
  data!:Usuario[];

  constructor(
    private usuarioService: UsuarioService
  ){
   }



  ngOnInit(): void {
    this.usuarioService.obtenerUsuariosPromise()
    .then((usuario:Usuario[]) => {
      this.usuarios=usuario
    })
    .catch((error: any) => {
      console.log('Hubo error', error)
    })
  }

  

}
