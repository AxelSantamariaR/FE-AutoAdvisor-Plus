import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from 'src/app/services/toast.service';
import { AsesoresSendCorreoComponent } from '../asesores-send-correo/asesores-send-correo.component';
import { IAsesor } from 'src/app/interfaces/asesores-interfaces';
import { AsesoresService } from 'src/app/services/asesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-asesores-page',
  templateUrl: './card-asesores-page.component.html',
  styleUrls: ['./card-asesores-page.component.css']
})
export class CardAsesoresPageComponent implements OnInit{
  asesores!: IAsesor[];
  loading: boolean = false;

  constructor(
    private _asesoresServices: AsesoresService,
    public dialog: MatDialog,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(){
    this.llenarAsesores();
  }

  
  llenarAsesores() {
    this.loading = true;
    this._asesoresServices.getAsesores().subscribe({
      next: (data) => {        
        this.asesores = data
        this.loading = false;
      },
      error: () => {
        this.router.navigate([''])
        this.loading = false;
        this.toast.error("Problemas con el servidor","Error")
      }
    })
  }


  openEmail(asesor: IAsesor){
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
