import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Deudor } from "../../models/deudor.interface"

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

  insertarDeudores(deudor: Deudor): Observable<Deudor> {
    let direccion = this.url + "deudores/insertar-deudores";
    return this.http.post<Deudor>(direccion, deudor)
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
