import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor (
    private fb: FormBuilder,
    private toast: ToastService,
    private router: Router
  ){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }
    
    this.router.navigate(['/dashboard'])

  }
}
