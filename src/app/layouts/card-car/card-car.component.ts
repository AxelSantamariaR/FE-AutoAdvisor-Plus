import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { IAutos } from 'src/app/interfaces/iautos';
import { AutosServicesService } from 'src/app/services/autos-services.service';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent implements OnInit{
  autos!: IAutos[]
  textSearch!: string;

  constructor(
    private _autosServices: AutosServicesService,
  ) { }

  ngOnInit() {
    this.autos = this._autosServices.getAutos();    
  }

  onTabSelected(event: MatTabChangeEvent): void {   

    if (event.tab.textLabel === 'All') {
      this.autos = this._autosServices.getAutos(); 
      return
    }

    if (event.tab.textLabel === '2023') {
      this.autos = this._autosServices.getAutosAnios(2023)  
      return
    }

    if (event.tab.textLabel === '2022') {
      this.autos = this._autosServices.getAutosAnios(2022)  
      return
    }

    if (event.tab.textLabel === 'Más') {
      this.autos = this._autosServices.getAutosAntiguos()  
      return
    }
  }

  search(event: Event){
    let text = (<HTMLInputElement>event.target).value;
    this.autos = this._autosServices.searchAutos(text);    
  }
  
}
