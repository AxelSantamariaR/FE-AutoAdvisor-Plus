import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastService } from 'src/app/services/toast.service';
import { AddEditAdvisorComponent } from '../add-edit-advisor/add-edit-advisor.component';
import { InfoAdvisorComponent } from '../info-advisor/info-advisor.component';
import { DeleteAdvisorComponent } from '../delete-advisor/delete-advisor.component';
import { IAsesor } from 'src/app/interfaces/asesores-interfaces';
import { AsesoresService } from 'src/app/services/asesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-advisor',
  templateUrl: './setting-advisor.component.html',
  styleUrls: ['./setting-advisor.component.css']
})
export class SettingAdvisorComponent implements OnInit{
  
  displayedColumns: string[] = ['nombres', 'correo', 'especialidad', 'accion'];
  dataSource = new MatTableDataSource<IAsesor>();
  loading: boolean = false;

  constructor(
    private _asesoresService: AsesoresService,
    public dialog: MatDialog,
    private toast: ToastService,
    private router: Router
  ) { }

  ngOnInit(){
    this.llenarAsesores();
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
  
  llenarAsesores() {
    this.loading = true;
    this._asesoresService.getAsesoresAdmin().subscribe({
      next: (data) => {        
        this.dataSource.data = data
        this.loading = false;
      },
      error: () => {
        this.router.navigate([''])
        this.loading = false;
        this.toast.error("Problemas con el servidor","Error")
      }
    })
  }

  openAdd(){
    this.dialog.open(AddEditAdvisorComponent,{
      autoFocus: false,
      disableClose: true,
      width: '60%',
    }).afterClosed().subscribe(
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.llenarAsesores();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.llenarAsesores();
          this.toast.success(`${datosCierre.message}`,`${datosCierre.title}`);
        }
      }
    ) 
  }

  openEdit(asesor: IAsesor){
     this.dialog.open(AddEditAdvisorComponent,{
      autoFocus: false,
      disableClose: true,
      width: '50%',
      data: asesor
    }).afterClosed().subscribe(
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.llenarAsesores();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.llenarAsesores();
          this.toast.success(`${datosCierre.message}`,`${datosCierre.title}`);
        }
      }
    )
  }

  openDelete(asesor: IAsesor){
     this.dialog.open(DeleteAdvisorComponent,{
      autoFocus: false,
      width: 'auto',
      data: asesor
    }).afterClosed().subscribe(
      (datosCierre) => {
        if(datosCierre == "Error" || datosCierre.title === 'Error'){
          this.llenarAsesores();
          this.toast.error("Problemas con el servidor","Error, intente luego")    
          return
        }
        if((datosCierre.title == "Enhorabuena")){
          this.llenarAsesores();
          this.toast.success(`${datosCierre.message}`,`${datosCierre.title}`);
        }
      }
    )
  }

  openInfo(asesor: IAsesor){
     this.dialog.open(InfoAdvisorComponent,{
      width: 'auto',
      data: asesor
    })
  }
    
}
