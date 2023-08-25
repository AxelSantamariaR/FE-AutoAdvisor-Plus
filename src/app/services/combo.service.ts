import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAsesorCombo, IHorarioCombo, IRolesCombo } from '../interfaces/combos-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComboService {

  private myAppUrl:string   = environment.endpoint;
  private myApiUrl:string   = 'api/Combos/';

  constructor(private http:HttpClient) { }

  getComboHorarios(): Observable<IHorarioCombo[]>{
    return this.http.get<IHorarioCombo[]>(`${this.myAppUrl}${this.myApiUrl}horarios`);
  }

  getComboAsesores(): Observable<IAsesorCombo[]>{
    return this.http.get<IAsesorCombo[]>(`${this.myAppUrl}${this.myApiUrl}asesores`);
  }

  getComboRoles(): Observable<IRolesCombo[]>{
    return this.http.get<IRolesCombo[]>(`${this.myAppUrl}${this.myApiUrl}roles`);
  }

}
