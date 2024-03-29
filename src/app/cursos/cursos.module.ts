import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import {MaterialModule} from '../material.module';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component'
import { CursosRoutingModule } from './cursosRouting';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosService } from './services/cursos.service';
import { PipesDirectivesModule } from '../pipes-directives-module.module';
import { StoreModule } from '@ngrx/store';
import { CursoStateEffects } from './state/curso-state.effects';
import { cursoStateFeatureKey, reducer } from './state/curso-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfesoresService } from '../profesores/profesores.service';
import { DetalleComponent } from './components/detalle/detalle.component';



@NgModule({
  declarations:[
    ListarCursosComponent,
    EditarCursoComponent,
    AgregarCursoComponent,
    DetalleComponent,
  ],
  imports:[
    CommonModule,
    MaterialModule,
    CursosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesDirectivesModule,
    StoreModule.forFeature(cursoStateFeatureKey,reducer),
    EffectsModule.forFeature([CursoStateEffects])
  ],
  exports:[
    ListarCursosComponent,
    EditarCursoComponent,
    AgregarCursoComponent,
  ],
    providers:[CursosService,ProfesoresService]
})
export class CursosModule { }
