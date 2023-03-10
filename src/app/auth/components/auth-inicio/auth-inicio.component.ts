import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-auth-inicio',
  templateUrl: './auth-inicio.component.html',
  styleUrls: ['./auth-inicio.component.css']
})
export class AuthInicioComponent implements OnInit{
  show:boolean = false
  formulario!:FormGroup
  constructor(
    private login : LoginService
  ){

  }


submit(){
  let usuario : Usuario = {
    usuario: this.formulario.value.usuario,
    contrasena : this.formulario.value.contrasena,
    esAdmin : this.formulario.value.esAdmin
  }
  
  if(usuario.usuario && usuario.contrasena){
    this.show = true
    this.login.login(usuario)
  }
}



ngOnInit(): void {
  this.formulario= new FormGroup({
    usuario: new FormControl('',[Validators.required]),
    contrasena: new FormControl('',[Validators.required]),
    esAdmin: new FormControl(false)
  })
}

}
