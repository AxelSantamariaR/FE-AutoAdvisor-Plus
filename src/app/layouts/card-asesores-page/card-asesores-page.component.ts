import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAsesores } from 'src/app/interfaces/iasesores';
import { AsesoresServicesService } from 'src/app/services/asesores-services.service';
import { ToastService } from 'src/app/services/toast.service';
import { AsesoresSendCorreoComponent } from '../asesores-send-correo/asesores-send-correo.component';

@Component({
  selector: 'app-card-asesores-page',
  templateUrl: './card-asesores-page.component.html',
  styleUrls: ['./card-asesores-page.component.css']
})
export class CardAsesoresPageComponent implements OnInit{
  asesores!: IAsesores[];

  constructor(
    private _asesoresServices: AsesoresServicesService,
    public dialog: MatDialog,
    private toast: ToastService
  ) { }

  ngOnInit(){
    this.asesores = this._asesoresServices.getAsesores();
  }

  openEmail(asesor: IAsesores){
    this.dialog.open(AsesoresSendCorreoComponent,{
      autoFocus: false,
      width: '30%',
      data: asesor
    }).afterClosed().subscribe(
      (data) => {
        if(data == "enviado"){          
          this.toast.success("Correo enviado con éxito","Enhorabuena")
          return
        }
      }
    )
  } 
}
