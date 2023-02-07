import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociarDeudorComprasComponent } from './asociar-deudor-compras/asociar-deudor-compras.component';
import { ComprasComponent } from './compras/compras.component';
import { DeudoresComponent } from './deudores/deudores.component';
import { MenuComponent } from './menu/menu.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { NuevoDeudorComponent } from './nuevo-deudor/nuevo-deudor.component';
import { VerComprasRealizadasComponent } from './ver-compras-realizadas/ver-compras-realizadas.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'deudores', component: DeudoresComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'nuevo-deudor', component: NuevoDeudorComponent },
  { path: 'nueva-compra', component: NuevaCompraComponent },
  { path: 'asigna-deudor-compra/:id', component: AsociarDeudorComprasComponent },
  { path: 'compras-realizadas/:id', component: VerComprasRealizadasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeudoresComponent]