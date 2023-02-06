import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { DeudoresComponent } from './deudores/deudores.component';
import { MenuComponent } from './menu/menu.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { NuevoDeudorComponent } from './nuevo-deudor/nuevo-deudor.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'deudores', component: DeudoresComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'nuevo-deudor', component: NuevoDeudorComponent },
  { path: 'nueva-compra', component: NuevaCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeudoresComponent]