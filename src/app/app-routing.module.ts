import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin/admin.guard';
import { LoggedGuard } from './core/guards/logged/logged.guard';
import { UserGuard } from './core/guards/user/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'visitor/landing',
    pathMatch: 'full'
  },
  {
    path: 'visitor',
    loadChildren: () => import('./visitor/visitor.module')
      .then(m => m.VisitorModule),
      canActivate: [LoggedGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule),
      canActivate: [UserGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
      canActivate: [AdminGuard]
  },
  {
    path: '**',
    redirectTo: 'visitor/landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
