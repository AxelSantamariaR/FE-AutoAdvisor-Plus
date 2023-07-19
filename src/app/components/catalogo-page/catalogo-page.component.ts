import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INuevo } from 'src/app/interfaces/nuevos-interfaces';
import { NuevoService } from 'src/app/services/nuevo.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.component.html',
  styleUrls: ['./catalogo-page.component.css']
})
export class CatalogoPageComponent implements OnInit{
  autos!: INuevo[]
  textSearch!: string;
  loading: boolean = false

  constructor(
    private router: Router,
    private toast: ToastService,
    private _autosServices: NuevoService
  ) { }

  ngOnInit() {
    this.llenarAutos()
  }

  llenarAutos() {
    this.loading = true;
    this._autosServices.getAutos().subscribe({
      next: (data) => {
        this.autos = data
        this.loading = false
      },
      error: () => {
        this.loading = false
        this.router.navigate([''])
        this.toast.error("Problemas con el servidor","Error")
      }
    })
  }

}
