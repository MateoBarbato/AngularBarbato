import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';

const routes: Routes = [
  {path:'alumnos', children:[
    {path:'listar', component:ListarAlumnosComponent},
    {path:'editar', component:EditarAlumnoComponent,canActivate:[AdminGuard]},
    {path:'agregar', component:AgregarAlumnoComponent,canActivate:[AdminGuard]},
    {path:'', redirectTo:'listar',pathMatch:'full'},
  ],title:'My App - Alumnos'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
