import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api/api.service'
import { Deudor } from '../models/deudor.interface'

@Component({
  selector: 'app-deudores',
  templateUrl: './deudores.component.html',
  styleUrls: ['./deudores.component.css']
})
export class DeudoresComponent {

  constructor(private api: ApiService) { }

  deudores: Deudor[] = []

  ngOnInit(): void {
    this.api.obtenerDeudores().subscribe(data => {
      this.deudores = data
    })
  }

}
