import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaComponent } from './components/tabla/tabla.component';

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BooleanEstiloDirective } from './directives/boolean-estilo.directive';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormularioReactivoComponent,
    TablaComponent,
    BooleanEstiloDirective,
    FormatoFechaPipe,
    BooleanToTextPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
