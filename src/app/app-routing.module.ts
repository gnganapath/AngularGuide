import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
 // { path :'' , component:AppComponent  },
  { path :'' , redirectTo:"material-ui" , pathMatch:"full"  },  // redirect material UI as landing module with lazy loading
  { path: 'material-ui', loadChildren: () => import('./material-ui/material-ui.module').then(module=> module.MaterialUiModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
