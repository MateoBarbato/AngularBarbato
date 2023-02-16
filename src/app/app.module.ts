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
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { TitleFontDirective } from './directives/title-font.directive';
import { CursosService } from './services/cursos.service';
import { AlumnosService } from './services/alumnos.service';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { env } from 'src/enviroment/enviroment';
import { cursos } from './services/cursos.data';
import { alumnos } from './services/alumnos.data';
import { config, token } from './config';
import { TablaUsuarioComponent } from './components/tabla-usuario/tabla-usuario.component';
import { UsuarioService } from './services/usuario.service';


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
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule
    
  ],
  providers:[UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }




  // providers: [{provide: CursosService, useFactory: ()=>{
  //    if(env.utilizarServicioAlpha == 'Legacy'){
  //     return cursos
  //   }else{
  //     return new CursosService()
  //   }}},
  //   {provide: AlumnosService, useFactory:()=>{
  //     if(env.utilizarServicioAlpha == 'Legacy'){
  //       return alumnos
  //     }else{
  //       return new AlumnosService()
  //     }}},

  //   {provide:token, useValue: config}
  
  // ],