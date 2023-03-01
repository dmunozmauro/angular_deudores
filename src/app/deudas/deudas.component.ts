import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styleUrls: ['./deudas.component.css']
})
export class DeudasComponent {
  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['/mis-compras'])
  }
}
