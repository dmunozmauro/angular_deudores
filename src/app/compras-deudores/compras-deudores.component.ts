import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras-deudores',
  templateUrl: './compras-deudores.component.html',
  styleUrls: ['./compras-deudores.component.css']
})
export class ComprasDeudoresComponent {
  constructor(private router: Router) { }

  deudores() {
    this.router.navigate(['/deudores'])
  }

  compras() {
    this.router.navigate(['/compras'])
  }
  
  volver() {
    this.router.navigate(['/menu'])
  }

}