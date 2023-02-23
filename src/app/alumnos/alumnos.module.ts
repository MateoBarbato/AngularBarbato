import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MaterialModule } from '../material.module';
import { PipesDirectivesModule } from '../pipes-directives-module.module';
import { AlumnosRoutingModule } from './alumnosRouting';
import { FormsModule } from '@angular/forms';
import { AlumnosService } from './services/alumnos.service';




@NgModule({
  declarations: [
    TablaComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesDirectivesModule,
    AlumnosRoutingModule,
    FormsModule,
  ],
  exports:[TablaComponent,
    EditarAlumnoComponent,
    AgregarAlumnoComponent,
  ],
    providers:[AlumnosService]
})
export class AlumnosModule { }
