import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CardTableComponent } from './components/card-table/card-table.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';

const routes: Routes = [
  {path:'cursos', children:[
    {path:'listar', component:CardTableComponent},
    {path:'editar', component:EditarCursoComponent},
    {path:'agregar', component:AgregarCursoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }