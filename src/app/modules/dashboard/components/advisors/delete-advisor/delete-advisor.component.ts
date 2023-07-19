import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAsesor } from 'src/app/interfaces/asesores-interfaces';
import { AsesoresService } from 'src/app/services/asesores.service';
import { Respuesta } from 'src/app/shared/respuesta';

@Component({
  selector: 'app-delete-advisor',
  templateUrl: './delete-advisor.component.html',
  styleUrls: ['./delete-advisor.component.css']
})
export class DeleteAdvisorComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteAdvisorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAsesor,
    private _asesoresService: AsesoresService
  ) { }


  delete(){
    if(this.data.id_Asesor !== undefined){
      this._asesoresService.deleteAsesor(this.data.id_Asesor).subscribe({
        next: (respuesta: Respuesta) => {
          const datosCierre = {
            title: respuesta.title,
            message: respuesta.message
          };
          this.dialogRef.close(datosCierre)
        },
        error: (respuesta: Respuesta) => {
          console.log(respuesta);
          
          this.dialogRef.close("Error");
        }
      })
    }
  }

}
