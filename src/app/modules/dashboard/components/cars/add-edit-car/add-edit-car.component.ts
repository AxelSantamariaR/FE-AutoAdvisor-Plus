import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INuevo } from 'src/app/interfaces/nuevos-interfaces';
import { NuevoService } from 'src/app/services/nuevo.service';
import { ToastService } from 'src/app/services/toast.service';
import { Respuesta } from 'src/app/shared/respuesta';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css']
})
export class AddEditCarComponent implements OnInit{

  form: FormGroup;
  fileName!: any;
  title: string = "Agregar Auto";
  iconName: string = "send";

  constructor(
    private dialogRef: MatDialogRef<AddEditCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: INuevo,
    private fb: FormBuilder,
    private toast: ToastService,
    private _autosServices: NuevoService
    ) {
    this.form = this.fb.group({
      nombre:          ['', Validators.required],
      descripcion:     ['', Validators.required],
      marca:           ['', Validators.required],
      tipo:            ['', Validators.required],
      anio:            ['', Validators.required],
      edicion:         ['', Validators.required],
      precio:          ['', Validators.required],
      imagen:          ['', Validators.required],      
    })
  }
 
  ngOnInit(): void {
    if(this.data){
      this.title              = "Editar Auto";
      this.iconName           = "edit";
      this.fileName           = this.data.imagen;      
      this.form.patchValue({
        nombre:               this.data.nombre,
        descripcion:          this.data.descripcion,
        marca:                this.data.marca,
        tipo:                 this.data.tipo,
        anio:                 this.data.anio,
        edicion:              this.data.edicion,
        precio:               this.data.precio
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

    const auto: INuevo = {
      nombre:             this.form.value.nombre,
      descripcion:        this.form.value.descripcion,
      marca:              this.form.value.marca,
      tipo:               this.form.value.tipo,
      anio:               this.form.value.anio,
      edicion:            this.form.value.edicion,
      precio:             this.form.value.precio,
      imagen:             this.fileName
    }

    if(this.data){      
      auto.id_Auto = this.data.id_Auto;
      this._autosServices.updateAuto(auto).subscribe({
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
      return
    }

    if(!this.data){
      this._autosServices.postAuto(auto).subscribe({
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
      return
    }
    this.dialogRef.close("Error");
    
  }
}
