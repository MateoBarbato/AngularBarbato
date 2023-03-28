import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent,title:'My App - Home' },
  {path:'auth',
  loadChildren: ()=> import('./auth/auth.module').then((modulos)=> modulos.AuthModule),
  title:'My App - Auth'},
  { path: '', redirectTo:'inicio', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
