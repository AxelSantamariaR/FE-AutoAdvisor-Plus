import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { INuevo } from 'src/app/interfaces/nuevos-interfaces';
import { NuevoService } from 'src/app/services/nuevo.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent implements OnInit{
  autos!: INuevo[]
  autosBandera!: INuevo[]
  textSearch!: string;
  loading: boolean = false;

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
    this.autos= []
    this._autosServices.getAutos().subscribe({
      next: (data) => {
        this.autosBandera = data
        this.autos = this.autosBandera
        this.loading = false;
      },
      error: () => {
        this.router.navigate([''])
        this.loading = false;
        this.toast.error("Problemas con el servidor","Error")
      }
    })
  }

  onTabSelected(event: MatTabChangeEvent): void {   

    if (event.tab.textLabel === 'All') {
      this.autos = this.autosBandera
      return
    }

    if (event.tab.textLabel === '2023') {
      this.autos = this.autosBandera.filter(item => item.anio === 2023)
      return
    }

    if (event.tab.textLabel === '2022') {
      this.autos = this.autosBandera.filter(item => item.anio === 2022)
    }

    if (event.tab.textLabel === 'Más') {
      this.autos = this.autosBandera.filter(item => item.anio !== 2023 && item.anio !== 2022)
      return
    }
  }

  search(event: Event){
    let text = (<HTMLInputElement>event.target).value;
    this.autos = this.autosBandera.filter(item => item.nombre.toLocaleLowerCase().includes(text.toLocaleLowerCase()))   
    return
  }
  
}
