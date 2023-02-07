import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeudoresComponent } from './deudores/deudores.component';
import { NuevoDeudorComponent } from './nuevo-deudor/nuevo-deudor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ComprasComponent } from './compras/compras.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { AsociarDeudorComprasComponent } from './asociar-deudor-compras/asociar-deudor-compras.component';
import { VerComprasRealizadasComponent } from './ver-compras-realizadas/ver-compras-realizadas.component';


@NgModule({
  declarations: [
    AppComponent,
    DeudoresComponent,
    NuevoDeudorComponent,
    MenuComponent,
    ComprasComponent,
    NuevaCompraComponent,
    AsociarDeudorComprasComponent,
    VerComprasRealizadasComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
