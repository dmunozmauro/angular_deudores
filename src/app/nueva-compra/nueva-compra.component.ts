import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Compras } from '../models/compras.interface';
import { ApiService } from '../servicios/api/api.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-nueva-compra',
  templateUrl: './nueva-compra.component.html',
  styleUrls: ['./nueva-compra.component.css']
})
export class NuevaCompraComponent {

  nueva_compra: Compras;
  invalido: Boolean = false;

  constructor(private api: ApiService, private router: Router) {
    this.nueva_compra = new Compras(0, "", 0, 0);
  }

  enviar() {
    if (this.nueva_compra.producto == "" || this.nueva_compra.valor == null || this.nueva_compra.valor == 0) {
      this.invalido = true;
    } else {
      this.invalido = false;

      Swal.fire({
        title: 'Cargando',
        allowOutsideClick: false
      });

      Swal.showLoading();

      this.api.insertarCompra(this.nueva_compra).subscribe((res: any) => {

        this.router.navigateByUrl('/compras')
        Swal.fire({
          icon: res.code == 2 ? 'error' : 'success',
          title: res.message,
          allowOutsideClick: false
        })
      })
    }
  }

  volver() {
    this.router.navigateByUrl('/deudores')
  }
}
