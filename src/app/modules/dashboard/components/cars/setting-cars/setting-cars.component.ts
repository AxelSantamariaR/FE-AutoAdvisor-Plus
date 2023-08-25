import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastService } from 'src/app/services/toast.service';
import { AddEditCarComponent } from '../add-edit-car/add-edit-car.component';
import { InfoCarComponent } from '../info-car/info-car.component';
import { DeleteCarComponent } from '../delete-car/delete-car.component';
import { NuevoService } from 'src/app/services/nuevo.service';
import { INuevo } from 'src/app/interfaces/nuevos-interfaces';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-setting-cars',
  templateUrl: './setting-cars.component.html',
  styleUrls: ['./setting-cars.component.css']
})
export class SettingCarsComponent implements OnInit{
  
  displayedColumns: string[] = ['nombre', 'marca', 'anio', 'precio', 'accion'];
  dataSource = new MatTableDataSource<INuevo>();
  loading: boolean = false;

  constructor(
    private _autosService: NuevoService,
    public dialog: MatDialog,
    private toast: ToastService,
    private router: Router
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
    this.loading = true;
    this._autosService.getAutosAdmin().subscribe({
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

  openAdd(){
    this.dialog.open(AddEditCarComponent,{
      autoFocus: false,
      disableClose: true,
      width: '60%',
    }).afterClosed().subscribe(
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.listAutos();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.listAutos();
          this.toast.success(`${datosCierre.message}`,`${datosCierre.title}`);
        }
      }
    )
  }

  openEdit(auto: INuevo){
    this.dialog.open(AddEditCarComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      data: auto
    }).afterClosed().subscribe(
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.listAutos();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.listAutos();
          this.toast.info(`${datosCierre.message}`,`${datosCierre.title}`);
        }
      }
    )
  }

  openDelete(auto: INuevo){
    this.dialog.open(DeleteCarComponent,{
      autoFocus: false,
      width: 'auto',
      data: auto
    }).afterClosed().subscribe(
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.listAutos();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.listAutos();
          this.toast.warning(`${datosCierre.message}`,`${datosCierre.title}`);
        }
      }
    )
  }

  openInfo(auto: INuevo){
    this.dialog.open(InfoCarComponent,{
      width: '50%',
      data: auto
    })
  }
  
}
