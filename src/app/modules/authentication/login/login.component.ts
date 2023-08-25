import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuarios } from 'src/app/interfaces/usuarios-interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;  
  bandera: boolean = false;

  constructor (
    private fb: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private _authentication: AuthenticationService
  ){
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar(){
    if(this.form.invalid){
      this.toast.error("Todos los campos son requeridos","Error")
      return
    }
    
    const credentials: IUsuarios = {
      username:     this.form.value.username,
      password:     this.form.value.password
    };

    this.bandera = true;
    this._authentication.authentication(credentials).subscribe({
      next: (usuario: any) => {
        if(usuario.title === 'Error'){
          this.handleInvalidCredentials(usuario);
          return
        }
        
        this.handleSuccessfulLogin(usuario);        
      },
      error: (error) => {
        this.handleLoginError(error);
      },
      complete: () => {
        this.bandera = false;
      },
    });
  }

  private handleInvalidCredentials(error: any) {
    this.toast.warning(error.message, error.title);
    this.resetFormAndFlag();
  }
  
  private handleSuccessfulLogin(token: string) {
    localStorage.clear();
    localStorage.setItem('token_value', token);
    this.toast.success('Enhorabuena, estás dentro', 'Bienvenido');
    this.resetFormAndFlag();
    this.router.navigate(['/dashboard']);
  }
  
  private handleLoginError(error: any) {
    this.toast.error('Ha ocurrido un error', 'Lo sentimos');
    this.resetFormAndFlag();
  }
      
  private resetFormAndFlag() {
    this.form.reset();
    this.bandera = false;
  }  
  
}
