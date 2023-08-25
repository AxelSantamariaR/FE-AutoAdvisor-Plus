import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IRolesCombo } from 'src/app/interfaces/combos-interfaces';
import { IUsuarios } from 'src/app/interfaces/usuarios-interfaces';
import { ComboService } from 'src/app/services/combo.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Respuesta } from 'src/app/shared/respuesta';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.css']
})
export class AdministratorsComponent {

  displayedColumns: string[] = ['cedula', 'nombres', 'username', 'modulo', 'accion'];
  dataSource = new MatTableDataSource<IUsuarios>();
  loading: boolean = false;
  form: FormGroup;  
  id: number = 0;
  roles!: IRolesCombo[];

  constructor(
    private _usuarioService: UsuarioService,
    private _comboService: ComboService,
    private toast: ToastService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      cedula:     ['', Validators.required],
      nombres:    ['', Validators.required],
      username:   ['', Validators.required],
      password:   ['', Validators.required],
      rolId:      ['', Validators.required], 
    })

  }

  ngOnInit(){
    this.listUsuarios();
    this.listRoles();
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
  
  listUsuarios(){
    this.loading = true;
    this._usuarioService.getAdministradores().subscribe({
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

  listRoles(){    
    this._comboService.getComboRoles().subscribe({
      next: (data) =>{
        this.roles = data        
      },
      error: (e) => {
        this.router.navigate([''])
        this.toast.error("Problemas con el servidor","Error")
      }
    })
  }


  submit(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }    
      
    const usuario: IUsuarios = {
      cedula:     this.form.value.cedula,
      nombres:    this.form.value.nombres,
      username:   this.form.value.username,
      password:   this.form.value.password,
      rolId:      this.form.value.rolId
    }

    this.loading = true;
    this._usuarioService.postAdministrador(usuario).subscribe({
      next: (respuesta: Respuesta) => {
        if(respuesta.title === 'Error'){
          this.handleErrorPersonalizado(respuesta)
          return
        }
        this.handleSuccess(respuesta);        
      },
      error: () => {
        this.handleError();
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  
  eliminar(){
    if(this.id !== 0){
      
      this._usuarioService.deleteAdministrador(this.id).subscribe({
        next : (respuesta: Respuesta) => {
          this.listUsuarios();
          this.toast.success(respuesta.message, respuesta.title);
          return
        },
        error: () => this.toast.error('Lo sentimos ha ocurrido un error', 'Error')
      })
      
      const dismissButton = document.getElementById('dismissButton');
      if (dismissButton) {
        dismissButton.click();
      }
    }
  }

  seterarId(id: number){
    this.id = id;
  }

  private handleSuccess(respuesta: Respuesta) {
    this.toast.success(respuesta.message, respuesta.title);
    this.resetFormAndFlag();
    this.listUsuarios();
  }
  
  private handleErrorPersonalizado(respuesta: Respuesta) {
    this.toast.error(respuesta.message, respuesta.title);
    this.resetFormAndFlag();
  }

  private handleError() {
    this.toast.error('Ha ocurrido un error', 'Lo sentimos');
    this.resetFormAndFlag();
  }
      
  private resetFormAndFlag() {
    this.form.reset();
    this.loading = false;
  }  


}
