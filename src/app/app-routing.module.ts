import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo: 'angular-dashboard', pathMatch: 'full'},
  {path:'angular-dashboard', loadChildren: () => import ('./angular-dashboard/angular-dashboard.module').then ( m => m.AngularDashboardModule) },
  {path:'angular-intro', loadChildren: () => import ('./angular-intro/angular-intro.module').then( m=> m.AngularIntroModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
