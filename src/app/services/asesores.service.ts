import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAsesor } from '../interfaces/asesores-interfaces';
import { Respuesta } from '../shared/respuesta';

@Injectable({
  providedIn: 'root'
})
export class AsesoresService {
  
  private myAppUrl:string   = environment.endpoint;
  private myApiUrl:string   = 'api/Asesores/';

  constructor(private http:HttpClient) { }

  getAsesores(): Observable<IAsesor[]>{
    return this.http.get<IAsesor[]>(`${this.myAppUrl}${this.myApiUrl}page`);
  }

  getAsesorId(id: number): Observable<IAsesor>{
    return this.http.get<IAsesor>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  getAsesoresAdmin(): Observable<IAsesor[]>{
    return this.http.get<IAsesor[]>(`${this.myAppUrl}${this.myApiUrl}admin`);
  }
  
  postAsesor(nuevo: IAsesor): Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`,nuevo);
  }

  updateAsesor(nuevo: IAsesor): Observable<Respuesta>{
    return this.http.put<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`,nuevo);
  }

  deleteAsesor(id: Number): Observable<Respuesta>{
    return this.http.delete<Respuesta>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}
