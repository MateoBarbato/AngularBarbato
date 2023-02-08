import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  formularioLogin!: FormGroup;

  constructor(){
    let passwordRegex: string = '^(?=.*\d).{4,8}$'
    let controles: any = {
      correo: new FormControl('', [Validators.email,Validators.required]),
      contrasena: new FormControl('', [Validators.pattern(passwordRegex),Validators.required]),
      recordarCredenciales: new FormControl(true)
      
    }

    this.formularioLogin = new FormGroup(controles)
  }


  login(){
    console.log(this.formularioLogin)
    if(this.formularioLogin.controls['correo'].errors?.['email']){
      console.log('hubo error')
    }
  }


}
