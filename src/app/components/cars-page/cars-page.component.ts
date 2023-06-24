import { AutosServicesService } from 'src/app/services/autos-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAutos } from 'src/app/interfaces/iautos';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit{
  auto!: IAutos;

  constructor(
    private route: ActivatedRoute,
    private _autosServices: AutosServicesService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.auto = this._autosServices.searchId(id);     
    });
  }
}
