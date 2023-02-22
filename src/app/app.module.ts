import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaComponent } from './components/tabla/tabla.component';
import { BooleanEstiloDirective } from './directives/boolean-estilo.directive';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { CardTableComponent } from './components/card-table/card-table.component';
import {MaterialModule} from './material.module'
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { TitleFontDirective } from './directives/title-font.directive';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { TablaUsuarioComponent } from './components/tabla-usuario/tabla-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioReactivoComponent,
    TablaComponent,
    BooleanEstiloDirective,
    FormatoFechaPipe,
    BooleanToTextPipe,
    CardTableComponent,
    FiltroPipe,
    SidebarComponent,
    NombreApellidoPipe,
    TitleFontDirective,
    ButtonAddComponent,
    TablaUsuarioComponent,
    NotFoundComponent,
    ToolbarComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule

  ],
  providers:[UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
