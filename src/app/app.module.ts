import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeudoresComponent } from './deudores/deudores.component';
import { NuevoDeudorComponent } from './nuevo-deudor/nuevo-deudor.component';

@NgModule({
  declarations: [
    AppComponent,
    DeudoresComponent,
    NuevoDeudorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
