import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Compras } from '../models/compras.interface';
import { ApiService } from '../servicios/api/api.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {

  constructor(private api: ApiService, private router: Router) { }

  compras: Compras[] = []

  ngOnInit(): void {
    this.api.obtenerCompras().subscribe((data: any) => {

      console.log(data)
      this.compras = data.data
    })
  }

  nuevaCompra(): void {
    this.router.navigate(['/nueva-compra'])
  }

}
