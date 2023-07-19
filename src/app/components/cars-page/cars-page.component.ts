import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INuevo } from 'src/app/interfaces/nuevos-interfaces';
import { NuevoService } from 'src/app/services/nuevo.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit{
  auto!: INuevo
  loading: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
    private _autosServices: NuevoService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loading = true
      this._autosServices.getAutoId(id).subscribe({
        next: (value) => {
          if(value == null){
            this.router.navigate([''])
            this.toast.error("Auto no existe","Error")    
            return
          }
          this.auto = value;
          this.loading = false
        },
        error: () => {
          this.router.navigate([''])
          this.toast.error("Ruta invalida","Error")          
        }
      })   
    });
  }
}
