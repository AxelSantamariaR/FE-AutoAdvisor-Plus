import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICitaPost } from 'src/app/interfaces/citas-interfaces';
import { IAsesorCombo, IHorarioCombo } from 'src/app/interfaces/combos-interfaces';
import { CitaService } from 'src/app/services/cita.service';
import { ComboService } from 'src/app/services/combo.service';
import { ToastService } from 'src/app/services/toast.service';
import { Respuesta } from 'src/app/shared/respuesta';

@Component({
  selector: 'app-car-cita-form',
  templateUrl: './car-cita-form.component.html',
  styleUrls: ['./car-cita-form.component.css']
})
export class CarCitaFormComponent implements OnInit{

  @Input() autoId?: number;
  @Input() autoNombre!: string;
  form: FormGroup;
  asesores!: IAsesorCombo[];
  horarios!: IHorarioCombo[];
  loading: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private _citasServices: CitaService,
    private _comboServices: ComboService
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
    this.llenarAsesores();  
    this.llenarHorarios();
  }

  llenarAsesores() {
    this.loading = true;
    this._comboServices.getComboAsesores().subscribe({
      next: (data) => {
        this.asesores = data
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate([''])
        this.toast.error("Problemas con el servidor","Error")
      }
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

  submit(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }

    if(this.autoId === undefined){
      this.toast.error("Intente de nuevo","Error")
      this.router.navigate(['/home']) 
      return
    }

    const cita: ICitaPost = {
      asesorId_Asesor:      this.form.value.idAsesor,
      horarioId_Horario:    this.form.value.hora,
      autoId_Auto:          this.autoId,
      nombresCliente:       this.form.value.nombre,
      telefono:         this.form.value.telefono,
      correo:           this.form.value.correo,
      fecha:            this.form.value.fecha
    }

    this._citasServices.postCita(cita).subscribe({
      next: (respuesta: Respuesta) => {
        this.toast.success(respuesta.message,respuesta.title);
        this.router.navigate(['/home']) 
      },
      error: () => {
        this.router.navigate(['/home']) 
        this.toast.error("No se pudo procesar la cita","Error")
      }
    })
    return
  }
  
}