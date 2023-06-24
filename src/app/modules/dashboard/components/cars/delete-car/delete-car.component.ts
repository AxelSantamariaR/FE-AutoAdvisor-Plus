import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAutos } from 'src/app/interfaces/iautos';
import { AutosServicesService } from 'src/app/services/autos-services.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAutos,
    private _autosService: AutosServicesService
  ) { }

  delete(){
    this._autosService.deleteAuto(this.data.id);
    this.dialogRef.close("eliminado")
  }
}
