import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  formularioAlumno!: FormGroup;

  constructor(){
    let numberPattern:string = '[1-9][0-9]';


    let controles: any = {
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      inscripcionAbierta: new FormControl(true),
      edad: new FormControl('', [Validators.required, Validators.pattern(numberPattern)]),
      sexo: new FormControl('', [Validators.required]),
      validado: new FormControl(true),
      
    }

    this.formularioAlumno = new FormGroup(controles)
  }


  login(){
    console.log(this.formularioAlumno)
    if(this.formularioAlumno.controls['nombre'].errors?.['required']){
      console.log('hubo error')
    }
  }


}
