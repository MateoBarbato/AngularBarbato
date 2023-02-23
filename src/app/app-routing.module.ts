import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'inicio', component: SidebarComponent },
  { path: '', redirectTo:'inicio', pathMatch:'full'},
  { path: '**', component:NotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }