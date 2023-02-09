import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Compras } from '../models/compras.interface';
import { ApiService } from '../servicios/api/api.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {

  constructor(private api: ApiService, private router: Router) { }

  compras: Compras[] = []

  ngOnInit(): void {
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.api.obtenerCompras().subscribe({
      next: (data: any) => {
        this.compras = data.data
        Swal.close();
      },
      error: (e) => {
        Swal.fire({
          icon: 'error',
          title: e.error.message,
          allowOutsideClick: false
        })
      }
    });
  }

  nuevaCompra(): void {
    this.router.navigate(['/nueva-compra'])
  }

  eliminarCompra(id: Number) {
    Swal.fire({
      title: '¿Eliminar compra?',
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

        this.api.eliminarCompra(id).subscribe({
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
    this.router.navigate(['/menu'])
  }

}
