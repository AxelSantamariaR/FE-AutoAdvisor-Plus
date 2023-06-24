import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsados } from 'src/app/interfaces/iusados';
import { ToastService } from 'src/app/services/toast.service';
import { UsadosServicesService } from 'src/app/services/usados-services.service';

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
    private _usadosServices: UsadosServicesService
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
      id:                 this._usadosServices.usados.length+1,
      nombre:             this.form.value.nombre,
      telefono:           this.form.value.telefono,
      correo:             this.form.value.correo,
      auto:               this.form.value.auto,
      anio:               this.form.value.anio,
      precio:             this.form.value.precio,
      descripcion:        this.form.value.descripcion,
      imagen:             this.fileName,
      estado:             0
    }

    this._usadosServices.addUsados(auto)
    this.router.navigate(['/home'])
    this.toast.success("Pronto nos comunicaremos contigo","Enhorabuena");
  }
}
