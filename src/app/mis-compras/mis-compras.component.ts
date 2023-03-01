import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent {
  constructor(private router: Router) { }

  deudas() {
    this.router.navigate(['/deudas'])
  }

  volver() {
    this.router.navigate(['/menu'])
  }
}
