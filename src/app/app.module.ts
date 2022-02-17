import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponentModule } from './layout-component/layout-component.module';
import { AppComponent } from './app.component';
import { HttpClientServicesComponent } from './http-client-services/http-client-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
