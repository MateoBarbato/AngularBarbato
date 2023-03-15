import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { MatNativeDateModule } from '@angular/material/core';

 

@NgModule({
  imports: [
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
  ],
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule
  ],
  declarations: [
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }