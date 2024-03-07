import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salones } from '../model/salones';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const OPTIONS = {
  reportProgress: true,
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})

export class SalonesService {

  constructor(private http:HttpClient) { }

  obtenerSalonesPorEdificioYPiso(idEdificio: number, numPiso: number): Observable<Salones[]> {
    return this.http.get<Salones[]>(`${environment.apiUrl}/salones/${idEdificio}/${numPiso}`, OPTIONS);
  }

  actualizarEstadoSalon(salonId: number, nuevoEstado: string) {
    const url = `${environment.apiUrl}/salones/${salonId}`;
    const body = { estado: nuevoEstado };
    return this.http.put(url, body);
  }
}
