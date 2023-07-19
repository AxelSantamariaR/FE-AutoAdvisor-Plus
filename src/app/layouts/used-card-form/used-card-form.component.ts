import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsados } from 'src/app/interfaces/usados-interfaces';
import { ToastService } from 'src/app/services/toast.service';
import { UsadoService } from 'src/app/services/usado.service';
import { Respuesta } from 'src/app/shared/respuesta';

@Component({
  selector: 'app-used-card-form',
  templateUrl: './used-card-form.component.html',
  styleUrls: ['./used-card-form.component.css']
})
export class UsedCardFormComponent {

  form: FormGroup;
  fileName!: any;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private _usadosServices: UsadoService
    ) {
    this.form = this.fb.group({
      nombre:          ['', Validators.required],
      telefono:        ['', Validators.required],
      correo:          ['', Validators.required],
      auto:            ['', Validators.required],
      anio:            ['', Validators.required],
      precio:          ['', Validators.required],
      descripcion:     ['', Validators.required],
      imagen:          ['', Validators.required],      
    })
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const fileNameParts = file.name.split('.');
      this.fileName = fileNameParts[0];
    }
  }

  submit(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }

    const auto: IUsados = {
      nombre:             this.form.value.auto,
      telefono:           this.form.value.telefono,
      correo:             this.form.value.correo,
      nombreVendedor:     this.form.value.nombre,
      anio:               this.form.value.anio,
      precio:             this.form.value.precio,
      descripcion:        this.form.value.descripcion,
      imagen:             this.fileName
    }

    this._usadosServices.postUsado(auto).subscribe({
      next: (respuesta: Respuesta) => {        
        this.toast.success(respuesta.message,respuesta.title);  
      },
      error: () => {
        this.toast.success("No se pudo procesar su solicitud","Error");
      }
    })
    this.router.navigate(['/home'])

  }
}
