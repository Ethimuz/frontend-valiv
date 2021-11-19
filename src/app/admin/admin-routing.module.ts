import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListUnvalidatedComponent } from './components/list-unvalidated/list-unvalidated.component';
import { ListComponent } from './components/list/list.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      {
        path: 'usuarios',
        component: ListComponent
      },
      {
        path: 'examenes',
        component: ListUnvalidatedComponent
      },
      {
        path: 'perfil',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
