import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiRoutingModule } from './material-ui-routing.module';
import { MaterialUiComponent } from './material-ui.component';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [MaterialUiComponent],
  imports: [
    CommonModule,
    MaterialUiRoutingModule,
    MatSliderModule
  ]
})
export class MaterialUiModule { }
