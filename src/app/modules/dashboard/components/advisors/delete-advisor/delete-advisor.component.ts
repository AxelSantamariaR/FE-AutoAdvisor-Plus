import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAsesores } from 'src/app/interfaces/iasesores';
import { AsesoresServicesService } from 'src/app/services/asesores-services.service';

@Component({
  selector: 'app-delete-advisor',
  templateUrl: './delete-advisor.component.html',
  styleUrls: ['./delete-advisor.component.css']
})
export class DeleteAdvisorComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteAdvisorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAsesores,
    private _asesoresService: AsesoresServicesService
  ) { }

  delete(){
    this._asesoresService.deleteAsesor(this.data.id);
    this.dialogRef.close("eliminado")
  }
}
