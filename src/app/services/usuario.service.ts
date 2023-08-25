import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUsuarios } from '../interfaces/usuarios-interfaces';
import { Observable } from 'rxjs';
import { Respuesta } from '../shared/respuesta';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private myAppUrl:string   = environment.endpoint;
  private myApiUrl:string   = 'api/Usuarios/';

  constructor(
    private http:HttpClient,
    private _authService: AuthenticationService
  ) { }

  getAdministradores(): Observable<IUsuarios[]>{
    return this.http.get<IUsuarios[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  
  postAdministrador(nuevo: IUsuarios): Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`,nuevo, { headers: this._authService.getAuthHeaders() });
  }

  deleteAdministrador(id: Number): Observable<Respuesta>{
    return this.http.delete<Respuesta>(`${this.myAppUrl}${this.myApiUrl}${id}`, { headers: this._authService.getAuthHeaders() });
  }
  
}
