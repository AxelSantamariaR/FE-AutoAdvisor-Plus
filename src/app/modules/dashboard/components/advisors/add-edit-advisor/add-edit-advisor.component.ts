import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAsesor } from 'src/app/interfaces/asesores-interfaces';
import { AsesoresService } from 'src/app/services/asesores.service';
import { ToastService } from 'src/app/services/toast.service';
import { Respuesta } from 'src/app/shared/respuesta';

@Component({
  selector: 'app-add-edit-advisor',
  templateUrl: './add-edit-advisor.component.html',
  styleUrls: ['./add-edit-advisor.component.css']
})
export class AddEditAdvisorComponent implements OnInit{
  
  form: FormGroup;
  fileName!: any;
  title: string = "Agregar Asesor";
  iconName: string = "send";
  
  constructor(
    private dialogRef: MatDialogRef<AddEditAdvisorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAsesor,
    private fb: FormBuilder,
    private toast: ToastService,
    private _asesoresServices: AsesoresService
  ) {
    this.form = this.fb.group({
      nombres:            ['', Validators.required],
      descripcion:        ['', Validators.required],
      aniosExperiencia:   ['', Validators.required],
      especialidad:       ['', Validators.required],
      idiomas:            ['', Validators.required],
      fechaNac:           ['', Validators.required],
      correo:             ['', Validators.required],
      telefono:           ['', Validators.required],
      imagen:             ['', Validators.required],    
    })
  }

  ngOnInit(){
    if(this.data){
      this.title              = "Editar Asesor";
      this.iconName           = "edit";
      this.fileName           = this.data.imagen;      
      this.form.patchValue({
        nombres:              this.data.nombres,
        descripcion:          this.data.descripcion,
        aniosExperiencia:     this.data.aniosExperiencia,
        especialidad:         this.data.especialidad,
        idiomas:              this.data.idiomas,
        fechaNac:             this.data.fechaNac,
        correo:               this.data.correo,
        telefono:             this.data.telefono
      })
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const fileNameParts = file.name.split('.');
      this.fileName = fileNameParts[0]; // Guardar solo el nombre sin la extensión
    }
  }

  submit(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }

    const asesor: IAsesor = {  
      nombres:            this.form.value.nombres,
      descripcion:        this.form.value.descripcion,
      aniosExperiencia:   this.form.value.aniosExperiencia,
      especialidad:       this.form.value.especialidad,
      fechaNac:           this.form.value.fechaNac,
      idiomas:            this.form.value.idiomas,
      correo:             this.form.value.correo,
      telefono:           this.form.value.telefono,
      imagen:             this.fileName
    }

    if(this.data){
      asesor.id_Asesor = this.data.id_Asesor;
      this._asesoresServices.updateAsesor(asesor).subscribe({
        next: (respuesta: Respuesta) => {
          const datosCierre = {
            title: respuesta.title,
            message: respuesta.message
          };
          this.dialogRef.close(datosCierre)
        },
        error: (respuesta: Respuesta) => {
          console.log(respuesta);
          
          this.dialogRef.close("Error");
        }
      })
      return
    }

    if(!this.data){
      this._asesoresServices.postAsesor(asesor).subscribe({
        next: (respuesta: Respuesta) => {
          const datosCierre = {
            title: respuesta.title,
            message: respuesta.message
          };
          this.dialogRef.close(datosCierre)
        },
        error: (respuesta: Respuesta) => {
          console.log(respuesta);
          
          this.dialogRef.close("Error");
        }
      })
      return
    }

    this.toast.error("Ha ocurrido un error","Intente luego")
    
  }
  
}
