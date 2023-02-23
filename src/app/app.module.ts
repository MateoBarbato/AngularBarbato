import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaComponent } from './components/tabla/tabla.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import {MaterialModule} from './material.module'
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { TablaUsuarioComponent } from './components/tabla-usuario/tabla-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CursosModule } from './cursos/cursos.module';
import { PipesDirectivesModule} from './pipes-directives-module.module';
import { CursosRoutingModule } from './cursos/cursosRouting';


@NgModule({
  declarations: [
    AppComponent,
    FormularioReactivoComponent,
    TablaComponent,
    SidebarComponent,
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
    AppRoutingModule,
    CursosModule,
    CursosRoutingModule,
    PipesDirectivesModule

  ],
  providers:[UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
