import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInicioComponent } from './components/auth-inicio/auth-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }
