import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoginService } from './auth/services/login.service';
import { cargarSesion } from './auth/state/auth.actions';
import { AuthState } from './auth/state/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularBarbato';
  subscription!: Subscription;

  constructor(
    // private login : LoginService
    // private authStore : Store<AuthState>,
  ){

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      // this.authStore.dispatch(cargarSesion({sesion:{sesionActiva:false}}))
  }
}
