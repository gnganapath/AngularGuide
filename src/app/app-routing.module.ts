import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path :'' , component:AppComponent  },
  { path: 'material-ui', loadChildren: () => import('./material-ui/material-ui.module').then(module=> module.MaterialUiModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
