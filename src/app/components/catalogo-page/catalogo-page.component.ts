import { Component, OnInit } from '@angular/core';
import { IAutos } from 'src/app/interfaces/iautos';
import { AutosServicesService } from 'src/app/services/autos-services.service';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.component.html',
  styleUrls: ['./catalogo-page.component.css']
})
export class CatalogoPageComponent implements OnInit{
  autos!: IAutos[]
  textSearch!: string;

  constructor(
    private _autosServices: AutosServicesService,
  ) { }

  ngOnInit() {
    this.autos = this._autosServices.getAutos();    
  }
}
