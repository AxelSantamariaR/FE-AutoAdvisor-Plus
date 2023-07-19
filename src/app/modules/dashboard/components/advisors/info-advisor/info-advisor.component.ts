import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAsesor } from 'src/app/interfaces/asesores-interfaces';

@Component({
  selector: 'app-info-advisor',
  templateUrl: './info-advisor.component.html',
  styleUrls: ['./info-advisor.component.css']
})
export class InfoAdvisorComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IAsesor
  ) { }
}
