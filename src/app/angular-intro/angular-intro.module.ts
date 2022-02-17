import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularIntroRoutingModule } from './angular-intro-routing.module';
import { AngularIntroComponent } from './angular-intro.component';


@NgModule({
  declarations: [
    AngularIntroComponent
  ],
  imports: [
    CommonModule,
    AngularIntroRoutingModule
  ]
})
export class AngularIntroModule { }
