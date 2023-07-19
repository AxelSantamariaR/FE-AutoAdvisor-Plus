import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastService } from 'src/app/services/toast.service';
import { EditDeleteCitasComponent } from '../edit-delete-citas/edit-delete-citas.component';
import { InfoCitasComponent } from '../info-citas/info-citas.component';
import { CitaService } from 'src/app/services/cita.service';
import { ICita } from 'src/app/interfaces/citas-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-citas',
  templateUrl: './setting-citas.component.html',
  styleUrls: ['./setting-citas.component.css']
})
export class SettingCitasComponent {
  
  displayedColumns: string[] = ['nombre', 'correo', 'fecha', 'asesor', 'accion'];
  dataSource = new MatTableDataSource<ICita>();
  loading: boolean = false

  constructor(
    private _citasService: CitaService,
    private toast: ToastService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(){
    this.listCitas();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = "Items por Página ";
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 
  
  listCitas(){
    this.loading = true;
    this._citasService.getCitas().subscribe({
      next: (data) =>{              
        this.dataSource.data = data;
        this.loading = false;
      },
      error: (e) => {
        this.router.navigate([''])
        this.toast.error("Problemas con el servidor","Error")
      }
    })
  }


  openEdit(cita: ICita){
    this.dialog.open(EditDeleteCitasComponent,{
      autoFocus: false,
      width: '30%',
      data: {
        objeto: cita,
        accion: 'actualizar'
      }
    }).afterClosed().subscribe(
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.listCitas();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.listCitas();
          this.toast.info(`${datosCierre.message}`,`${datosCierre.title}`);
        }
      }
    ) 
  }

  openDelete(cita: ICita){
     this.dialog.open(EditDeleteCitasComponent,{
      autoFocus: false,
      width: 'auto',
      data: {
        objeto: cita,
        accion: 'eliminar'
      }
    }).afterClosed().subscribe(
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.listCitas();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.listCitas();
          this.toast.warning(`${datosCierre.message}`,`${datosCierre.title}`);
        }
      }
    )
  }

  openInfo(cita: ICita){
     this.dialog.open(InfoCitasComponent,{
      width: 'auto',
      data: cita
    }) 
  }
  
}
