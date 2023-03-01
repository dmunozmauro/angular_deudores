import { Component } from '@angular/core';
import { ApiService } from '../servicios/api/api.service'
import { Deudor } from '../models/deudor.interface'
import { Router } from '@angular/router';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-deudores',
  templateUrl: './deudores.component.html',
  styleUrls: ['./deudores.component.css']
})
export class DeudoresComponent {

  constructor(private api: ApiService, private router: Router) { }

  deudores: Deudor[] = []

  ngOnInit(): void {
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.api.obtenerDeudores().subscribe({
      next: data => {
        this.deudores = data
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
  }

  nuevoDeudor(): void {
    this.router.navigate(['/nuevo-deudor'])
  }

  asociarCompra(id: Number): void {
    this.router.navigate(['/asigna-deudor-compra/', id])
  }

  verCompras(id: Number): void {
    this.router.navigate(['/compras-realizadas/', id])
  }

  eliminarDeudor(id: Number): void {
    Swal.fire({
      title: '¿Eliminar deudor?',
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

        this.api.eliminarDeudor(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: res.code == 2 ? 'error' : 'success',
              title: res.message,
              allowOutsideClick: false
            })

            if (res.code != 2) {
              this.ngOnInit()
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
    this.router.navigate(['/compras-deudores'])
  }

}
