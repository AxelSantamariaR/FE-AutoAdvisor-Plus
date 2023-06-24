import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAutos } from 'src/app/interfaces/iautos';

@Component({
  selector: 'app-info-car',
  templateUrl: './info-car.component.html',
  styleUrls: ['./info-car.component.css']
})
export class InfoCarComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IAutos
  ) { }
}
