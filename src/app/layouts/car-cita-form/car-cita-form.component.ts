import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAsesores } from 'src/app/interfaces/iasesores';
import { ICita } from 'src/app/interfaces/icita';
import { AsesoresServicesService } from 'src/app/services/asesores-services.service';
import { CitaServicesService } from 'src/app/services/cita-services.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-car-cita-form',
  templateUrl: './car-cita-form.component.html',
  styleUrls: ['./car-cita-form.component.css']
})
export class CarCitaFormComponent implements OnInit{

  @Input() autoId!: number;
  @Input() autoNombre!: string;
  form: FormGroup;
  asesores!: IAsesores[];

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private _citasServices: CitaServicesService,
    private _asesoresServices: AsesoresServicesService
    ) {
    this.form = this.fb.group({
      nombre:           ['', Validators.required],
      telefono:         ['', Validators.required],
      correo:           ['', Validators.required],
      hora:             ['', Validators.required],
      fecha:            ['', Validators.required],
      idAsesor:         ['', Validators.required],
    })
  }

  ngOnInit(){
    this.asesores = this._asesoresServices.getAsesores();    
  }

  nombreAsesor(id: number): string {
    const asesorEncontrado = this.asesores.find(e => e.id === id);
    return asesorEncontrado ? asesorEncontrado.nombres : '';
  }

  submit(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }

    const agenda: ICita = {
      id:               this._citasServices.citas.length+1,
      auto: {
        id:             this.autoId,
        nombre:         this.autoNombre
      },
      nombre:           this.form.value.nombre,
      telefono:         this.form.value.telefono,
      correo:           this.form.value.correo,
      hora:             this.form.value.hora,
      fecha:            this.form.value.fecha,
      asesor: {
        id:             this.form.value.idAsesor,
        nombre:         this.nombreAsesor(this.form.value.idAsesor)
      }, 
      estado:           true
    }
    this._citasServices.addAsesor(agenda)    
    this.router.navigate(['/home']) 
    this.toast.success("Te esperamos pronto","Enhorabuena");
  }
  
}