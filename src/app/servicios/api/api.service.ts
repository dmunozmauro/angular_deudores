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

  obtenerComprasNoAsociadas(): Observable<Compras[]> {
    let direccion = this.url + "compras/compras-no-asociadas"
    return this.http.get<Compras[]>(direccion)
  }

  obtenerComprasDeudor(id: Number): Observable<Compras[]> {
    let direccion = this.url + "compras/compras-realizadas-deudor/" + id
    return this.http.get<Compras[]>(direccion)
  }

  obtenerCompraById(id: Number): Observable<Compras[]> {
    let direccion = this.url + "compras/consulta-compra/" + id
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
  
  editarCompra(compra: Compras): Observable<Compras> {
    let direccion = this.url + "compras/editar-compras";
    return this.http.put<Compras>(direccion, compra)
  }

  asociarCompras(compra: []): Observable<[]> {
    let direccion = this.url + "deudores/actualizar-relacion-deudor-compra";
    return this.http.put<[]>(direccion, compra)
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

  eliminarCompraDeudor(id: Number): Observable<Compras> {
    let direccion = this.url + "compras/eliminar-compra-deudor";
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      mode: 'no-cors',
      body: { "id": id }
    }

    return this.http.delete<Compras>(direccion, options)
  }
}
