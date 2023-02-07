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
    this.nueva_compra = new Compras(0, "", 0, 0, 0, 0, 0, false);
  }

  enviar() {
    console.log(this.nueva_compra)
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.api.insertarCompra(this.nueva_compra).subscribe((res: any) => {

      this.router.navigate(['/compras'])
      Swal.fire({
        icon: res.code == 2 ? 'error' : 'success',
        title: res.message,
        allowOutsideClick: false
      })
    })
  }


  volver() {
    this.router.navigate(['/compras'])
  }
}
