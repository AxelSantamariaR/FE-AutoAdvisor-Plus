import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { INuevo } from '../interfaces/nuevos-interfaces';
import { Respuesta } from '../shared/respuesta';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NuevoService {

  private myAppUrl:string   = environment.endpoint;
  private myApiUrl:string   = 'api/Nuevos/';

  constructor(
    private http:HttpClient,
    private _authService: AuthenticationService
  ) { }

  getAutos(): Observable<INuevo[]>{
    return this.http.get<INuevo[]>(`${this.myAppUrl}${this.myApiUrl}page`);
  }

  getAutoId(id: number): Observable<INuevo>{
    return this.http.get<INuevo>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  getAutosAdmin(): Observable<INuevo[]>{
    return this.http.get<INuevo[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  
  postAuto(nuevo: INuevo): Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`,nuevo, { headers: this._authService.getAuthHeaders() });
  }

  updateAuto(nuevo: INuevo): Observable<Respuesta>{
    return this.http.put<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`,nuevo,  { headers: this._authService.getAuthHeaders() });
  }

  deleteAuto(id: Number): Observable<Respuesta>{
    return this.http.delete<Respuesta>(`${this.myAppUrl}${this.myApiUrl}${id}`,  { headers: this._authService.getAuthHeaders() });
  }
  
}
