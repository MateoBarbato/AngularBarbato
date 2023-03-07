import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {path:'cursos', children:[
    { path: 'cursos',
    loadChildren: () => import('./cursos.module').then((modulos)=>modulos.CursosModule)},
    {path:'listar', component:ListarCursosComponent},
    {path:'editar', component:EditarCursoComponent,canActivate:[AdminGuard]},
    {path:'agregar', component:AgregarCursoComponent,canActivate:[AdminGuard]},
    { path: '', redirectTo:'listar', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }