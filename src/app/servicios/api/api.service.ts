import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Deudor } from "../../models/deudor.interface"
import { Compras } from "../../models/compras.interface"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:5000/"

  constructor(private http: HttpClient) { }

  obtenerDeudores(): Observable<Deudor[]> {
    let direccion = this.url + "deudores/consultar-deudores"
    return this.http.get<Deudor[]>(direccion)
  }
  
  obtenerCompras(): Observable<Compras[]> {
    let direccion = this.url + "compras/consultar-compras"
    return this.http.get<Compras[]>(direccion)
  }

  insertarDeudores(deudor: Deudor): Observable<Deudor> {
    let direccion = this.url + "deudores/insertar-deudores";
    return this.http.post<Deudor>(direccion, deudor)
  }
  
  insertarCompra(compra: Compras): Observable<Compras> {
    let direccion = this.url + "compras/insertar-compras";
    return this.http.post<Compras>(direccion, compra)
  }


  eliminarDeudor(id: Number): Observable<Deudor> {
    let direccion = this.url + "deudores/eliminar-deudores";
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      mode: 'no-cors',
      body: { "id": id }
    }

    return this.http.delete<Deudor>(direccion, options)
  }
}
