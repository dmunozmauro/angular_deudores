import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeudoresComponent } from './deudores/deudores.component';
import { NuevoDeudorComponent } from './nuevo-deudor/nuevo-deudor.component';

const routes: Routes = [
  { path: '', redirectTo: 'deudores', pathMatch: 'full' },
  { path: 'deudores', component: DeudoresComponent },
  { path: 'nuevo-deudor', component: NuevoDeudorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeudoresComponent]