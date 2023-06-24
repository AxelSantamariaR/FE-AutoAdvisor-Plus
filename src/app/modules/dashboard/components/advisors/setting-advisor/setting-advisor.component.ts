import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IAsesores } from 'src/app/interfaces/iasesores';
import { AsesoresServicesService } from 'src/app/services/asesores-services.service';
import { ToastService } from 'src/app/services/toast.service';
import { AddEditAdvisorComponent } from '../add-edit-advisor/add-edit-advisor.component';
import { InfoAdvisorComponent } from '../info-advisor/info-advisor.component';
import { DeleteAdvisorComponent } from '../delete-advisor/delete-advisor.component';

@Component({
  selector: 'app-setting-advisor',
  templateUrl: './setting-advisor.component.html',
  styleUrls: ['./setting-advisor.component.css']
})
export class SettingAdvisorComponent implements OnInit{
  
  displayedColumns: string[] = ['nombres', 'correo', 'especialidad', 'accion'];
  dataSource = new MatTableDataSource<IAsesores>();

  constructor(
    private _asesoresService: AsesoresServicesService,
    public dialog: MatDialog,
    private toast: ToastService
  ) { }

  ngOnInit(){
    this.listAsesores();
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
  
  listAsesores(){
    this.dataSource.data = this._asesoresService.getAsesores();
  }  


  openAdd(){
    this.dialog.open(AddEditAdvisorComponent,{
      autoFocus: false,
      disableClose: true,
      width: '60%',
    }).afterClosed().subscribe(
      (data) => {
        if(data == "agregado"){
          this.listAsesores();
          this.toast.success("Agregado exitosamente","Enhorabuena")
          return
        }
      }
    ) 
  }

  openEdit(asesor: IAsesores){
     this.dialog.open(AddEditAdvisorComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      data: asesor
    }).afterClosed().subscribe(
      (data) => {
        if(data == "actualizado"){
          this.listAsesores();
          this.toast.info("Actualizado exitosamente","Enhorabuena")
          return
        }
      }
    )
  }

  openDelete(asesor: IAsesores){
     this.dialog.open(DeleteAdvisorComponent,{
      autoFocus: false,
      width: 'auto',
      data: asesor
    }).afterClosed().subscribe(
      (data) => {
        if(data == "eliminado"){
          this.listAsesores();
          this.toast.warning("Eliminado exitosamente","Acción completada")
          return
        }
      }
    )
  }

  openInfo(asesor: IAsesores){
     this.dialog.open(InfoAdvisorComponent,{
      width: 'auto',
      data: asesor
    })
  }
    
}
