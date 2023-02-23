import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {
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
