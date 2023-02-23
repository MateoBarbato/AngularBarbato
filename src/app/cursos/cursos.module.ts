import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTableComponent } from './components/card-table/card-table.component';
import {MaterialModule} from '../material.module';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component'
import { CursosRoutingModule } from './cursosRouting';
import { PipesDirectivesModule } from '../pipes-directives-module.module';
import { FormsModule } from '@angular/forms';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosService } from './services/cursos.service';



@NgModule({
  declarations: [
    CardTableComponent,
    EditarCursoComponent,
    AgregarCursoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesDirectivesModule,
    CursosRoutingModule,
    FormsModule,
  ],
  exports:[
    CardTableComponent,
    EditarCursoComponent,
    AgregarCursoComponent,
  ],

    providers:[CursosService]
})
export class CursosModule { }
