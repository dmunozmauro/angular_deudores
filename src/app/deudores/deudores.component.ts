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
    this.api.obtenerDeudores().subscribe(data => {
      this.deudores = data
    })
  }

  nuevoDeudor(): void {
    this.router.navigateByUrl('/nuevo-deudor')
  }

  asociarCompra(id: any): void {
    this.router.navigateByUrl('/asigna-deudor-compra/' + id)
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

        this.api.eliminarDeudor(id).subscribe((res: any) => {
          Swal.fire({
            icon: res.code == 2 ? 'error' : 'success',
            title: res.message,
            allowOutsideClick: false
          })

          this.ngOnInit()
        })
      }
    })
  }

}
