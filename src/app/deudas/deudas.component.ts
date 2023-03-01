import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api/api.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styleUrls: ['./deudas.component.css']
})
export class DeudasComponent {
  constructor(private api: ApiService, private router: Router) { }

  compras: any = [];
  sumas_instituciones: any = [];
  suma_total: number = 0;

  sueldo: number = 0;
  restante_mes: number = 0;
  diferencia: number = 0;

  ngOnInit(): void {
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.api.obtenerMisCompras().subscribe({
      next: (data: any) => {
        this.compras = data.data;

        let info: any = [];

        this.compras.map((c: any) => {
          info.push({
            "institucion": c.nombre,
            "total": c.deuda_total
          })

          this.suma_total = this.suma_total + Number.parseInt(c.deuda_total)
        })

        this.sumas_instituciones = info

        this.api.obtenerSituacionFinanciera().subscribe({
          next: (data: any) => {
            this.sueldo = Number.parseInt(data.data.sueldo);
            this.restante_mes = Number.parseInt(data.data.restante_mes);

            this.diferencia = (this.sueldo + this.restante_mes) - this.suma_total


            Swal.close()
          },
          error: (e) => {
            Swal.fire({
              icon: 'error',
              title: e.error.message,
              allowOutsideClick: false
            })
          }
        });
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

  volver() {
    this.router.navigate(['/mis-compras'])
  }
}
