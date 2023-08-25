import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ToastService } from 'src/app/services/toast.service';
import { map, shareReplay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-nav-component',
  templateUrl: './dashboard-nav-component.component.html',
  styleUrls: ['./dashboard-nav-component.component.css']
})
export class DashboardNavComponentComponent implements OnInit{
  nombre!: string
  modulo!: string

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _toast: ToastService,
    private router: Router
    ) {}

  ngOnInit() {
    const token = localStorage.getItem('token_value');
    if (!token) {
      this._toast.error('Acceso denegado','Error');
      this.router.navigate(['/login'])
      return
    }

    const decodedToken: any = jwt_decode(token);
    this.nombre = decodedToken.unique_name[0];
    this.modulo = decodedToken.unique_name[1];     
  }

  cerrarSesion(){
    localStorage.clear();
    this.router.navigate([''])
    
  }

}
