import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  // { path: 'cursos', component: CardTableComponent },
  { path: 'inicio', component: SidebarComponent },
  { path: '', redirectTo:'inicio', pathMatch:'full'},
  { path: '**', component:NotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }