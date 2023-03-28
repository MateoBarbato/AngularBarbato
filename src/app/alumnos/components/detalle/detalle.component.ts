import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  formulario!:FormGroup
  toggleValue:boolean = false

  constructor(
    private alumnoService : AlumnosService,
    private router : Router
  ){}

  editandoAlumno(){
    let alumno: Alumno ={
      id:this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      edad: this.formulario.value.edad,
      sexo: this.formulario.value.sexo,
      validado: this.toggleValue
    }
    if(this.formulario.status=="VALID"){

      this.alumnoService.editarAlumno(alumno).subscribe((alumno:Alumno)=>{
        alert(`El alumno: ${alumno.nombre} fue editado satisfactoriamente`)
      })
      setTimeout(()=>this.router.navigate(['alumnos/listar']),1000)

    } else {
      alert('Los campos maracados en rojo son obligatorios')
    }}


    setValue(e: MatSlideToggleChange){
      this.toggleValue = this.formulario.get('validado')?.value
      console.log(this.toggleValue)
    }
}
