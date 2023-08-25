import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICita, ICitaPost, ICitaPut } from '../interfaces/citas-interfaces';
import { Respuesta } from '../shared/respuesta';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private myAppUrl:string   = environment.endpoint;
  private myApiUrl:string   = 'api/Citas/';

  constructor(
    private http:HttpClient,
    private _authService: AuthenticationService
  ) { }

  getCitas(): Observable<ICita[]>{
    return this.http.get<ICita[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  postCita(nuevo: ICitaPost): Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`,nuevo);
  }

  updateCita(nuevo: ICitaPut): Observable<Respuesta>{
    return this.http.put<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`,nuevo, { headers: this._authService.getAuthHeaders() });
  }

  deleteCita(id: Number): Observable<Respuesta>{
    return this.http.delete<Respuesta>(`${this.myAppUrl}${this.myApiUrl}${id}`, { headers: this._authService.getAuthHeaders() });
  }
}
