import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { BooleanEstiloDirective } from './directives/boolean-estilo.directive';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { FontTitleDirective } from './directives/font-title.directive';



@NgModule({
  declarations:[
    BooleanToTextPipe,
    BooleanEstiloDirective,
    FormatoFechaPipe,
    FiltroPipe,
    NombreApellidoPipe,
    FontTitleDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BooleanToTextPipe,
    BooleanEstiloDirective,
    FormatoFechaPipe,
    FiltroPipe,
    NombreApellidoPipe,
    FontTitleDirective
  ]
})
export class PipesDirectivesModule {}
