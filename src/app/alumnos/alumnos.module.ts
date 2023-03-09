import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { MaterialModule } from '../material.module';

import { AlumnosRoutingModule } from './alumnosRouting';
import { AlumnosService } from './services/alumnos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesDirectivesModule } from '../pipes-directives-module.module';




@NgModule({
  declarations: [
    ListarAlumnosComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AlumnosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesDirectivesModule
  ],
  exports:[
    ListarAlumnosComponent,
    EditarAlumnoComponent,
    AgregarAlumnoComponent,
  ],
    providers:[AlumnosService]
})
export class AlumnosModule { }
