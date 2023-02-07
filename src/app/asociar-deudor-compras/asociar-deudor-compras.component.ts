import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api/api.service';
import { Compras } from '../models/compras.interface';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-asociar-deudor-compras',
  templateUrl: './asociar-deudor-compras.component.html',
  styleUrls: ['./asociar-deudor-compras.component.css']
})
export class AsociarDeudorComprasComponent {

  compras_no_asociadas: any = [];
  compra_seleccionada: any;
  invalido: Boolean = false;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.obtenerComprasNoAsociadas().subscribe((data: any) => {

      this.compras_no_asociadas = data.data
    })
  }

  onChange(e: Event) {
    this.compra_seleccionada = e.target;
    console.log("seleccionada", this.compra_seleccionada);
  }

  asociar() {
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.api.asociarCompras(this.compras_no_asociadas).subscribe((res: any) => {
      console.log("res", res)
      /* this.router.navigateByUrl('/compras')
      Swal.fire({
        icon: res.code == 2 ? 'error' : 'success',
        title: res.message,
        allowOutsideClick: false
      }) */
    })
  }
}

