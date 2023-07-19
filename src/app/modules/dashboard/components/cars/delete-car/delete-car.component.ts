import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { INuevo } from 'src/app/interfaces/nuevos-interfaces';
import { NuevoService } from 'src/app/services/nuevo.service';
import { ToastService } from 'src/app/services/toast.service';
import { Respuesta } from 'src/app/shared/respuesta';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit{

  constructor(
    private dialogRef: MatDialogRef<DeleteCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: INuevo,
    private _autosService: NuevoService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(){
    if(this.data.id_Auto === undefined ){
      this.toast.error("Ah ocurrido un error","Intente luego")
      this.router.navigate(['/dashboard/cars'])
    }
  }

  delete(){
    if(this.data.id_Auto !== undefined){
      this._autosService.deleteAuto(this.data.id_Auto).subscribe({
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
