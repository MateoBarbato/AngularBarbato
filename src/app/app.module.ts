import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './core/components/formulario-reactivo/formulario-reactivo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './core/components/sidebar/sidebar.component'
import { MaterialModule } from './material.module'
import { ButtonAddComponent } from './core/components/button-add/button-add.component';
import { UsuarioService } from './core/services/usuario.service'
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { CursosModule } from './cursos/cursos.module';
import { PipesDirectivesModule} from './pipes-directives-module.module';
import { CursosRoutingModule } from './cursos/cursosRouting';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AlumnosRoutingModule } from './alumnos/alumnosRouting';
import { NotfoundRoutingModule } from './notFoundRouting';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosService } from './cursos/services/cursos.service';
import { AuthRoutingModule } from './auth/auth.routing.module';
import { AlumnosService } from './alumnos/services/alumnos.service';



@NgModule({
  declarations: [
    AppComponent,
    FormularioReactivoComponent,
    SidebarComponent,
    ButtonAddComponent,
    NotFoundComponent,
    ToolbarComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AlumnosModule,
    CursosModule,
    CursosRoutingModule,
    AlumnosRoutingModule,
    AuthRoutingModule,
    NotfoundRoutingModule,
    PipesDirectivesModule,
    HttpClientModule,

  ],
  providers:[UsuarioService,CursosService,AlumnosService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
