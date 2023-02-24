import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';

const routes: Routes = [
  {path:'alumnos', children:[
    {path:'listar', component:ListarAlumnosComponent},
    {path:'editar', component:EditarAlumnoComponent},
    {path:'agregar', component:AgregarAlumnoComponent},
    {path:'', redirectTo:'listar',pathMatch:'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }