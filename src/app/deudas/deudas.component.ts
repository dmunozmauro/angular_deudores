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


  ngOnInit(): void {
    Swal.fire({
      title: 'Cargando',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.api.obtenerMisCompras().subscribe({
      next: (data: any) => {
        this.compras = data.data;
        console.log(this.compras);
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

    
    
  }

  volver() {
    this.router.navigate(['/mis-compras'])
  }
}
