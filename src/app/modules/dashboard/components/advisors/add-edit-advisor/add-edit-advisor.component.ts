import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAsesores } from 'src/app/interfaces/iasesores';
import { AsesoresServicesService } from 'src/app/services/asesores-services.service';
import { ToastService } from 'src/app/services/toast.service';

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
    @Inject(MAT_DIALOG_DATA) public data: IAsesores,
    private fb: FormBuilder,
    private toast: ToastService,
    private _asesoresServices: AsesoresServicesService
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

    const asesor: IAsesores = {
      id:                 (this.data) ? this.data.id : this._asesoresServices.asesores.length+1,
      nombres:            this.form.value.nombres,
      descripcion:        this.form.value.descripcion,
      aniosExperiencia:   this.form.value.aniosExperiencia,
      especialidad:       this.form.value.especialidad,
      fechaNac:           this.form.value.fechaNac,
      idiomas:            this.form.value.idiomas,
      correo:             this.form.value.correo,
      telefono:           this.form.value.telefono,
      imagen:             this.fileName,
      estado:             true
    }

    if(this.data){
      this._asesoresServices.updateAsesor(asesor)
      this.dialogRef.close("actualizado")
      return
    }

    if(!this.data){
      this._asesoresServices.addAsesor(asesor)
      this.dialogRef.close("agregado")
      return
    }

    this.toast.error("Ha ocurrido un error","Intente luego")
    
  }
  
}
