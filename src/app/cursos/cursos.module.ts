import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import {MaterialModule} from '../material.module';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component'
import { CursosRoutingModule } from './cursosRouting';
import { PipesDirectivesModule } from '../pipes-directives-module.module';
import { FormsModule } from '@angular/forms';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosService } from './services/cursos.service';



@NgModule({
  declarations: [
    ListarCursosComponent,
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
    ListarCursosComponent,
    EditarCursoComponent,
    AgregarCursoComponent,
  ],

    providers:[CursosService]
})
export class CursosModule { }
