import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUsados } from 'src/app/interfaces/iusados';
import { UsadosServicesService } from 'src/app/services/usados-services.service';

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

  constructor(
    private _usadosServices: UsadosServicesService,
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
    if(this.title === "Aceptar Oferta"){
      this._usadosServices.acceptarUsados(this.usado.id)
      this.dialogRef.close("aceptado")
      return
    }

    if(this.title === "Rechazar Oferta"){
      this._usadosServices.rechazarUsados(this.usado.id)
      this.dialogRef.close("rechazado")
      return
    }
  }
}
