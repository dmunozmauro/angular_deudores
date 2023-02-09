import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compras } from '../models/compras.interface';
import { ApiService } from '../servicios/api/api.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-nueva-compra',
  templateUrl: './nueva-compra.component.html',
  styleUrls: ['./nueva-compra.component.css']
})
export class NuevaCompraComponent {

  id_compra_editada: any = null

  nueva_compra: Compras;
  invalido: Boolean = false;

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.nueva_compra = new Compras(0, "", 0, 0, 0, 0, false, "");
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params?.idCompra) {
        this.id_compra_editada = params.idCompra;

        this.api.obtenerCompraById(this.id_compra_editada).subscribe({
          next: (data: any) => {
            this.nueva_compra = data.data[0]
          },
          error: (e) => {
            Swal.fire({
              icon: 'error',
              title: e.error.message,
              allowOutsideClick: false
            })
          }
        })
      }
    })
  }

  crearCompra() {
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.api.insertarCompra(this.nueva_compra).subscribe({
      next: (res: any) => {

        this.router.navigate(['/compras'])
        Swal.fire({
          icon: res.code == 2 ? 'error' : 'success',
          title: res.message,
          allowOutsideClick: false
        })
      },
      error: (e) => {
        Swal.fire({
          icon: 'error',
          title: e.error.message,
          allowOutsideClick: false
        })
      }
    })
  }

  editarCompra() {
    if (this.nueva_compra.es_servicio) {
      this.nueva_compra = new Compras(this.nueva_compra.id, this.nueva_compra.producto, this.nueva_compra.valor, 0, 0, 0, this.nueva_compra.es_servicio, "");
    }

    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.api.editarCompra(this.nueva_compra).subscribe({
      next: (res: any) => {
        this.router.navigate(['/compras-realizadas/', res.deudor])
        Swal.fire({
          icon: res.code == 2 ? 'error' : 'success',
          title: res.message,
          allowOutsideClick: false
        })
      },
      error: (e) => {
        Swal.fire({
          icon: 'error',
          title: e.error.message,
          allowOutsideClick: false
        })
      }
    })
  }

  actualizarFechaPago(id: Number) {

    Swal.fire({
      title: '¿Actualizar fecha de pago al día de hoy?',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: `Cancelar`,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Cargando',
          allowOutsideClick: false
        });

        Swal.showLoading();

        let hoy = new Date();
        hoy.setUTCHours(0, 0, 0, 0);

        let body = {
          "id": id,
          "ultima_fecha_pago": hoy.toISOString()
        }

        this.api.actualizarFechaPago(body).subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: res.code == 2 ? 'error' : 'success',
              title: res.message,
              allowOutsideClick: false
            })

            if (res.code != 2) {
              this.volver()
            }
          },
          error: (e) => {
            Swal.fire({
              icon: 'error',
              title: e.error.message,
              allowOutsideClick: false
            })
          }
        })
      }
    })
  }


  volver() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.router.navigate(['/compras-realizadas', params.id]);
    });
  }
}
