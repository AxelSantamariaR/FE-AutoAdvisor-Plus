import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICita } from 'src/app/interfaces/icita';
import { CitaServicesService } from 'src/app/services/cita-services.service';
import { ToastService } from 'src/app/services/toast.service';

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

  constructor(
    private dialogRef: MatDialogRef<EditDeleteCitasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private toast: ToastService,
    private _citasServices: CitaServicesService
  ) {
    this.form = this.fb.group({
      hora:             ['', Validators.required],
      fecha:            ['', Validators.required],
    })
  }

  ngOnInit(){
    this.cita     = this.data.objeto;
    this.bandera  = this.data.accion;
  
    if(this.bandera === "eliminar"){
      this.title              = "Eliminar Cita";
      this.iconName           = "delete";
      return
    }

    if(this.bandera === "actualizar"){  
      this.form.patchValue({
        hora:     this.cita.hora,
        fecha:    this.cita.fecha
      })
      console.log(this.cita);
      
    }
  }

  submit(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }

    const agenda: ICita = {
      id:               this.cita.id,
      auto: {
        id:             this.cita.auto.id,
        nombre:         this.cita.auto.nombre
      },
      nombre:           this.cita.nombre,
      telefono:         this.cita.telefono,
      correo:           this.cita.correo,
      hora:             this.form.value.hora,
      fecha:            this.form.value.fecha,
      asesor: {
        id:             this.cita.asesor.id,
        nombre:         this.cita.asesor.nombre
      }, 
      estado:           true
    }
    this._citasServices.updateCita(agenda)
    this.dialogRef.close("actualizado")
  }

  deleteCita(){
    this._citasServices.deleteCita(this.cita.id)
    this.dialogRef.close("eliminado")
  }
  
}
