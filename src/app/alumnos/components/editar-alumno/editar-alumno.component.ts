import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  formulario!:FormGroup
  toggleValue:boolean = false


  constructor(
    private router:Router,
    private alumnoService:AlumnosService,
    private activatedRoute: ActivatedRoute
  ){

  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        id: new FormControl(parametros.get('id'),Validators.required),
        nombre: new FormControl(parametros.get('nombre'),Validators.required),
        apellido: new FormControl(parametros.get('apellido'),Validators.required),
        edad: new FormControl(parametros.get('edad'),Validators.required),
        sexo: new FormControl(parametros.get('sexo'),Validators.required),
        validado: new FormControl(parametros.get('validado')),
      })
    })
  }

  setValue(e: MatSlideToggleChange){
    this.toggleValue = this.formulario.get('validado')?.value
    console.log(this.toggleValue)
  }

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



}
