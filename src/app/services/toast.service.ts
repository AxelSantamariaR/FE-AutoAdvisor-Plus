import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  success(title: string, message: string){
    this.toastr.success(title, message)
  }

  error(title: string, message: string){
    this.toastr.error(title, message)
  }

  warning(title: string, message: string){
    this.toastr.warning(title, message)
  }

  info(title: string, message: string){
    this.toastr.info(title, message)
  }
}
