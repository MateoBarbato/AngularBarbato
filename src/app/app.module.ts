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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
