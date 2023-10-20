import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autenticable } from 'src/app/administrador/servicios/compartido/Autenticable';
import { Observable } from 'rxjs';
import { Departamento } from '../modelos/Departamento';
import { Ciudad } from '../modelos/Ciudad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioDepartamentos extends Autenticable {

  private readonly host = environment.urlBackend

  constructor(private http: HttpClient) {
    super()
  }

  obtenerDepartamentos():Observable<Departamento[]>{
    const endpoint = '/api/v1/maestras/departamentos'
    return this.http.get<Departamento[]>(`${this.host}${endpoint}`)
  }

  obtenerCiudades(departamentoId: number): Observable<Ciudad[]>{
    const endpoint = `/api/v1/maestras/ciudades?departamentoId=${departamentoId}`
    return this.http.get<Departamento[]>(`${this.host}${endpoint}`)
  }

  obtenerTodasLasCiudades(): Observable<Ciudad[]>{
    const endpoint = '/api/v1/maestras/ciudades'
    return this.http.get<Ciudad[]>(`${this.host}${endpoint}`)
  }

}
