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
}
