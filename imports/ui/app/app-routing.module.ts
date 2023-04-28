import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './views/login/login.component';
import { About } from './views/about/about.component'
import { Dashboard } from './views/dashboard/dashboard.component';
import { Kanban } from './views/kanban/kanban.component';
 
const routes: Routes = [{
  path: 'login',
  component: Login
},
{
  path: 'dashboard',
  component: Dashboard
},
{
  path: 'kanban',
  component: Kanban
},
{
  path: 'about',
  component: About
},
// 404 Page
{
  path: '**',
  redirectTo: '/login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
