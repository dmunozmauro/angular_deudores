import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Compras } from '../models/compras.interface';
import { ApiService } from '../servicios/api/api.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-ver-compras-realizadas',
  templateUrl: './ver-compras-realizadas.component.html',
  styleUrls: ['./ver-compras-realizadas.component.css']
})
export class VerComprasRealizadasComponent {

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  compras_realizadas: Compras[] = [];
  deudor: string = "";
  suma_total_cuotas: Number = 0;
  id_deudor: any;

  ngOnInit() {
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.activatedRoute.params.subscribe((params: any) => {
      this.id_deudor = params.id;
      this.api.obtenerComprasDeudor(params.id).subscribe({
        next: (data: any) => {
          this.compras_realizadas = data?.data?.compras;
          this.deudor = data.data.deudor;

          this.compras_realizadas.map((c: any) => {
            this.suma_total_cuotas = Number(this.suma_total_cuotas) + Number.parseInt(c.valor_cuota)
          })
          Swal.close()
        },
        error: (e) => {
          Swal.fire({
            icon: 'error',
            title: e.error.message,
            allowOutsideClick: false
          })
        }
      })
    });
  }

  volver() {
    this.router.navigate(['/deudores'])
  }

  eliminarRelacionCompraDeudor(id: Number) {
    Swal.fire({
      title: '¿Eliminar compra de deudor?',
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

        this.api.eliminarCompraDeudor(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: res.code == 2 ? 'error' : 'success',
              title: res.message,
              allowOutsideClick: false
            })

            this.ngOnInit()
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

  actualizarCompraDeudor(id: Number) {
    this.router.navigate(['/compras-realizadas', this.id_deudor, id])
  }
}
