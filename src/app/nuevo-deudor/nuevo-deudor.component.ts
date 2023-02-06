import { Component } from '@angular/core';
import { Deudor } from '../models/deudor.interface';
import { ApiService } from '../servicios/api/api.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-nuevo-deudor',
  templateUrl: './nuevo-deudor.component.html',
  styleUrls: ['./nuevo-deudor.component.css']
})
export class NuevoDeudorComponent {

  nuevo_deudor: Deudor;
  invalido: Boolean = false;

  constructor(private api: ApiService, private router: Router) {

    this.nuevo_deudor = new Deudor(0, "", 0)
  }

  enviar() {

    if (this.nuevo_deudor.deudor == "") {
      this.invalido = true;
    } else {
      this.invalido = false;

      Swal.fire({
        title: 'Cargando',
        allowOutsideClick: false
      });

      Swal.showLoading();

      this.api.insertarDeudores(this.nuevo_deudor).subscribe((res: any) => {

        this.router.navigateByUrl('/deudores')
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
