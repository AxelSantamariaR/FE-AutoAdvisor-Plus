import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUsados } from 'src/app/interfaces/iusados';
import { ToastService } from 'src/app/services/toast.service';
import { UsadosServicesService } from 'src/app/services/usados-services.service';
import { RespuestaUsedComponent } from '../respuesta-used/respuesta-used.component';

@Component({
  selector: 'app-setting-used-cars',
  templateUrl: './setting-used-cars.component.html',
  styleUrls: ['./setting-used-cars.component.css']
})
export class SettingUsedCarsComponent implements OnInit{
  
  displayedColumns: string[] = ['auto', 'año', 'usuario', 'telefono', 'estado', 'accion'];
  dataSource = new MatTableDataSource<IUsados>();

  constructor(
    private _usadosService: UsadosServicesService,
    public dialog: MatDialog,
    private toast: ToastService
  ) { }

  ngOnInit(){
    this.listUsados();
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
  
  listUsados(){
    this.dataSource.data = this._usadosService.getUsados();    
  }

  openAceptar(usado: IUsados, opcion: string){
    this.dialog.open(RespuestaUsedComponent,{
      autoFocus: false,
      disableClose: true,
      width: '40%',
      data: {
        usado,
        opcion
      }
    }).afterClosed().subscribe(
      (data) => {
        if(data == "aceptado"){
          this.listUsados();
          this.toast.success("Auto aceptado","Enhorabuena")
          return
        }
      }
    )
  }

  openRechazar(usado: IUsados, opcion: string){
    this.dialog.open(RespuestaUsedComponent,{
      autoFocus: false,
      disableClose: true,
      width: '40%',
      data: {
        usado,
        opcion
      }
    }).afterClosed().subscribe(
      (data) => {
        if(data == "rechazado"){
          this.listUsados();
          this.toast.success("Rechazado exitosamente","Enhorabuena")
          return
        }
      }
    )
  }

  openInfo(usado: IUsados, opcion: string){
    this.dialog.open(RespuestaUsedComponent,{
      width: '40%',
      data: {
        usado,
        opcion
      }
    })
  }
  
}
