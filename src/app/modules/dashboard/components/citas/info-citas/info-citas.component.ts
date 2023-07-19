import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICita } from 'src/app/interfaces/citas-interfaces';

@Component({
  selector: 'app-info-citas',
  templateUrl: './info-citas.component.html',
  styleUrls: ['./info-citas.component.css']
})
export class InfoCitasComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public cita: ICita
  ) { }
}
