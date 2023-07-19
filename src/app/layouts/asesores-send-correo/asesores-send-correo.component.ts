import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAsesor } from 'src/app/interfaces/asesores-interfaces';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-asesores-send-correo',
  templateUrl: './asesores-send-correo.component.html',
  styleUrls: ['./asesores-send-correo.component.css']
})
export class AsesoresSendCorreoComponent implements OnInit{

  asesor!: IAsesor;
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AsesoresSendCorreoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAsesor,
    private toast: ToastService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      correo:          ['', Validators.required],
      asunto:          ['', Validators.required],
      descripcion:     ['', Validators.required],
    })
   }

  ngOnInit() {
    this.asesor = this.data;
  }

  sumbit(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }
    
    this.form.reset()
    this.dialogRef.close()
    this.toast.success("Correo envía exitosamente","Enhorabuena")
  }
}
