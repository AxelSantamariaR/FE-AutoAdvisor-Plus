import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastService } from 'src/app/services/toast.service';
import { RespuestaUsedComponent } from '../respuesta-used/respuesta-used.component';
import { IUsados } from 'src/app/interfaces/usados-interfaces';
import { UsadoService } from 'src/app/services/usado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-used-cars',
  templateUrl: './setting-used-cars.component.html',
  styleUrls: ['./setting-used-cars.component.css']
})
export class SettingUsedCarsComponent implements OnInit{
  
  displayedColumns: string[] = ['auto', 'año', 'usuario', 'telefono', 'estado', 'accion'];
  dataSource = new MatTableDataSource<IUsados>();
  loading: boolean = false;

  constructor(
    private _usadosService: UsadoService,
    private toast: ToastService,
    public dialog: MatDialog,
    private router: Router
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
    this.loading = true;
    this._usadosService.getUsados().subscribe({
      next: (data) =>{              
        this.dataSource.data = data;
        this.loading = false;
        console.log(data);
        
      },
      error: (e) => {
        this.router.navigate([''])
        this.toast.error("Problemas con el servidor","Error")
      }
    })
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
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.listUsados();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.listUsados();
          this.toast.success(`${datosCierre.message}`,`${datosCierre.title}`);
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
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.listUsados();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.listUsados();
          this.toast.success(`${datosCierre.message}`,`${datosCierre.title}`);
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
