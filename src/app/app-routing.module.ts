import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeudoresComponent } from './deudores/deudores.component';

const routes: Routes = [
  { path: '', redirectTo: 'deudores', pathMatch: 'full' },
  { path: 'deudores', component: DeudoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DeudoresComponent]