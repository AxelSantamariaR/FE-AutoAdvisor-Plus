import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IAutos } from 'src/app/interfaces/iautos';
import { AutosServicesService } from 'src/app/services/autos-services.service';
import { ToastService } from 'src/app/services/toast.service';
import { AddEditCarComponent } from '../add-edit-car/add-edit-car.component';
import { InfoCarComponent } from '../info-car/info-car.component';
import { DeleteCarComponent } from '../delete-car/delete-car.component';
 
@Component({
  selector: 'app-setting-cars',
  templateUrl: './setting-cars.component.html',
  styleUrls: ['./setting-cars.component.css']
})
export class SettingCarsComponent implements OnInit{
  
  displayedColumns: string[] = ['nombre', 'marca', 'anio', 'precio', 'accion'];
  dataSource = new MatTableDataSource<IAutos>();

  constructor(
    private _autosService: AutosServicesService,
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
    this.dataSource.data = this._autosService.getAutos();
  }

  openAdd(){
    this.dialog.open(AddEditCarComponent,{
      autoFocus: false,
      disableClose: true,
      width: '60%',
    }).afterClosed().subscribe(
      (data) => {
        if(data == "agregado"){
          this.listAutos();
          this.toast.success("Agregado exitosamente","Enhorabuena")
          return
        }
      }
    )
  }

  openEdit(auto: IAutos){
    this.dialog.open(AddEditCarComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      data: auto
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

  openDelete(auto: IAutos){
    this.dialog.open(DeleteCarComponent,{
      autoFocus: false,
      width: 'auto',
      data: auto
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

  openInfo(auto: IAutos){
    this.dialog.open(InfoCarComponent,{
      width: '50%',
      data: auto
    })
  }
  
}
