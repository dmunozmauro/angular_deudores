import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Compras } from '../models/compras.interface';
import { ApiService } from '../servicios/api/api.service';

@Component({
  selector: 'app-ver-compras-realizadas',
  templateUrl: './ver-compras-realizadas.component.html',
  styleUrls: ['./ver-compras-realizadas.component.css']
})
export class VerComprasRealizadasComponent {

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  compras_realizadas: Compras[] = [];
  deudor: string = "";

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.api.obtenerComprasDeudor(params.id).subscribe((data: any) => {
        this.compras_realizadas = data.data.compras;
        this.deudor = data.data.deudor;
      })
    });
  }

  volver() {
    this.router.navigate(['/deudores'])
  }
}
