import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Observable, Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.component.html',
  styleUrls: ['./usuarios-detalle.component.css']
})
export class UsuariosDetalleComponent implements OnInit {
  formulario!:FormGroup
  columnas:string[] = ['usuario', 'contraseña', 'admin']
  usuarios$!:Observable<Usuario[]>
  subscription!:Subscription
  dataSource!: MatTableDataSource<Usuario>

  constructor(
    private router:Router,
    private usuariosService:UsuarioService
  ){}


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Usuario>
    this.usuarios$=this.usuariosService.obtenerUsuariosObservable()
    this.subscription = this.usuarios$.subscribe((data)=>{
      console.log(data)
      this.dataSource.data = data
    })
  }

  volverInicio(){
    this.router.navigate(['inicio'])
  }

}
