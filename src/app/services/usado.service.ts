import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUsados } from '../interfaces/usados-interfaces';
import { Respuesta } from '../shared/respuesta';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsadoService {

  private myAppUrl:string   = environment.endpoint;
  private myApiUrl:string   = 'api/Usados/';

  constructor(
    private http:HttpClient,
    private _authService: AuthenticationService
  ) { }

  getUsados(): Observable<IUsados[]>{
    return this.http.get<IUsados[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  
  postUsado(nuevo: IUsados): Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`,nuevo);
  }

  putAceptar(id: Number): Observable<Respuesta>{
    return this.http.delete<Respuesta>(`${this.myAppUrl}${this.myApiUrl}aceptar/${id}`, { headers: this._authService.getAuthHeaders() });
  }

  putRechazar(id: Number): Observable<Respuesta>{
    return this.http.delete<Respuesta>(`${this.myAppUrl}${this.myApiUrl}rechazar/${id}`, { headers: this._authService.getAuthHeaders() });
  }

}
