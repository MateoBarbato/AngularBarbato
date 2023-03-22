import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInicioComponent } from './components/auth-inicio/auth-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, reducer } from './state/auth.reducer';
import { LoginService } from './services/login.service';
// import { AuthEffects } from '../auth.effects';
// import { EffectsModule } from '@ngrx/effects';


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
    StoreModule.forFeature(authFeatureKey,reducer)
    // EffectsModule.forFeature([AuthEffects]),
  ],
  providers:[LoginService]
})
export class AuthModule { }
