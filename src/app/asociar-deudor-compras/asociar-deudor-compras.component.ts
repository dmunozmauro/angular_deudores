import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../servicios/api/api.service';

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
  id_deudor: Number = 0;
  body: any = [];

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      this.id_deudor = params.id
    });

    this.api.obtenerComprasNoAsociadas().subscribe((data: any) => {
      this.compras_no_asociadas = data.data
    })
  }

  onChange(e: Event) {
    this.compra_seleccionada = e.target;
  }

  asociar() {
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.body = { "id_deudor": this.id_deudor, "id_compra": this.compras_no_asociadas[0].id_compra };

    this.api.asociarCompras(this.body).subscribe((res: any) => {
      this.router.navigate(['/deudores'])
      Swal.fire({
        icon: res.code == 2 ? 'error' : 'success',
        title: res.message,
        allowOutsideClick: false
      })
    })
  }

  volver() {
    this.router.navigate(['/deudores'])
  }
}

