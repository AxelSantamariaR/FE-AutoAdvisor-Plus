import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUsados } from 'src/app/interfaces/usados-interfaces';
import { UsadoService } from 'src/app/services/usado.service';
import { Respuesta } from 'src/app/shared/respuesta';

@Component({
  selector: 'app-respuesta-used',
  templateUrl: './respuesta-used.component.html',
  styleUrls: ['./respuesta-used.component.css']
})
export class RespuestaUsedComponent implements OnInit {
  usado: IUsados;
  opcion: string;
  title: string = "Aceptar Oferta";
  btn: string = "check_circle";
  loading: boolean = false;

  constructor(
    private _usadosServices: UsadoService,
    private dialogRef: MatDialogRef<RespuestaUsedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.usado = data.usado;
    this.opcion = data.opcion;
  }

  ngOnInit(){
    if(this.opcion === 'rechazar'){
      this.title = "Rechazar Oferta"
      this.btn = "delete_forever"
      return
    }

    if(this.opcion === 'informacion'){
      this.title = ''
    }
  }

  accion(){
    if(this.usado.id_Auto !== undefined){
      if(this.title === "Aceptar Oferta"){
        this._usadosServices.putAceptar(this.usado.id_Auto).subscribe({
          next: (respuesta: Respuesta) => {
            const datosCierre = {
              title: respuesta.title,
              message: respuesta.message
            };
            this.dialogRef.close(datosCierre)
          },
          error: () => {
            this.dialogRef.close("Error");
          }
        })
        return
      }
  
      if(this.title === "Rechazar Oferta"){
        this._usadosServices.putRechazar(this.usado.id_Auto).subscribe({
          next: (respuesta: Respuesta) => {
            const datosCierre = {
              title: respuesta.title,
              message: respuesta.message
            };
            this.dialogRef.close(datosCierre)
          },
          error: () => {
            this.dialogRef.close("Error");
          }
        })
        return
      }
    }    
  }
}
