import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICita, ICitaPut } from 'src/app/interfaces/citas-interfaces';
import { IHorarioCombo } from 'src/app/interfaces/combos-interfaces';
import { CitaService } from 'src/app/services/cita.service';
import { ComboService } from 'src/app/services/combo.service';
import { ToastService } from 'src/app/services/toast.service';
import { Respuesta } from 'src/app/shared/respuesta';

@Component({
  selector: 'app-edit-delete-citas',
  templateUrl: './edit-delete-citas.component.html',
  styleUrls: ['./edit-delete-citas.component.css']
})
export class EditDeleteCitasComponent {
  
  form: FormGroup;
  title: string = "Actualizar Fecha";
  iconName: string = "edit";
  bandera!: string;
  cita! : ICita;
  loading: boolean = false
  horarios!: IHorarioCombo[]

  constructor(
    private dialogRef: MatDialogRef<EditDeleteCitasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private toast: ToastService,
    private _citasServices: CitaService,
    private _comboServices: ComboService,
    private router: Router
  ) {
    this.form = this.fb.group({
      hora:             ['', Validators.required],
      fecha:            ['', Validators.required],
    })
  }

  
  llenarHorarios() {
    this.loading = true;
    this._comboServices.getComboHorarios().subscribe({
      next: (data) => {
        this.horarios = data
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate([''])
        this.toast.error("Problemas con el servidor","Error")
      }
    })
  }  

  ngOnInit(){
    this.llenarHorarios() 
    this.cita     = this.data.objeto;
    this.bandera  = this.data.accion;
  
    if(this.bandera === "eliminar"){
      this.title              = "Eliminar Cita";
      this.iconName           = "delete";
      return
    }
  }

  submit(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }

    const agenda: ICitaPut = {
      id_Cita:                this.cita.id_Cita,
      Id_Horario:             this.form.value.hora,
      fecha:                  this.form.value.fecha  
    }
    this._citasServices.updateCita(agenda).subscribe({
      next: (respuesta: Respuesta) => {
        const datosCierre = {
          title: respuesta.title,
          message: respuesta.message
        };
        this.dialogRef.close(datosCierre)
        return
      },
      error: () => {
        this.dialogRef.close("Error");
      }
    })
  }

  deleteCita(){
    this._citasServices.deleteCita(this.cita.id_Cita).subscribe({
      next: (respuesta: Respuesta) => {
        const datosCierre = {
          title: respuesta.title,
          message: respuesta.message
        };
        this.dialogRef.close(datosCierre)
      },
      error: () => {
        this.dialogRef.close("Error");
      }
    })
  }
  
}
