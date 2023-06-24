import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICita } from 'src/app/interfaces/icita';
import { CitaServicesService } from 'src/app/services/cita-services.service';
import { ToastService } from 'src/app/services/toast.service';
import { EditDeleteCitasComponent } from '../edit-delete-citas/edit-delete-citas.component';
import { InfoCitasComponent } from '../info-citas/info-citas.component';

@Component({
  selector: 'app-setting-citas',
  templateUrl: './setting-citas.component.html',
  styleUrls: ['./setting-citas.component.css']
})
export class SettingCitasComponent {
  
  displayedColumns: string[] = ['nombre', 'correo', 'fecha', 'asesor', 'accion'];
  dataSource = new MatTableDataSource<ICita>();

  constructor(
    private _citasService: CitaServicesService,
    public dialog: MatDialog,
    private toast: ToastService
  ) { }

  ngOnInit(){
    this.listAutos();
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
  
  listAutos(){
    this.dataSource.data = this._citasService.getCitas();
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
      (data) => {
        if(data == "actualizado"){
          this.listAutos();
          this.toast.info("Actualizado exitosamente","Enhorabuena")
          return
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
      (data) => {
        if(data == "eliminado"){
          this.listAutos();
          this.toast.warning("Eliminado exitosamente","Acción completada")
          return
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
