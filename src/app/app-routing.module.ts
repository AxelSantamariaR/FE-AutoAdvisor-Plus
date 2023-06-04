import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { AdvisorsPageComponent } from './components/advisors-page/advisors-page.component';
import { UsedCarsPageComponent } from './components/used-cars-page/used-cars-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { UsadosHomePageComponent } from './layouts/usados-home-page/usados-home-page.component';
import { UsadosSeguimientoPageComponent } from './layouts/usados-seguimiento-page/usados-seguimiento-page.component';
import { UsadosSolicitarPageComponent } from './layouts/usados-solicitar-page/usados-solicitar-page.component';
import { UsadosTerminosPageComponent } from './layouts/usados-terminos-page/usados-terminos-page.component';

const routes: Routes = [
  { path:'',                redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',           component: HomePageComponent },
  { path: 'autos',          component: CarsPageComponent},
  { path: 'asesores',       component: AdvisorsPageComponent },
  { path: 'usados',         component: UsedCarsPageComponent, children: [
    { path: '',             component: UsadosHomePageComponent },
    { path: 'seguimiento',  component: UsadosSeguimientoPageComponent },
    { path: 'solicitar',    component: UsadosSolicitarPageComponent },
    { path: 'terminos',     component: UsadosTerminosPageComponent },
  ]},
  { path: 'nosotros',       component: ContactPageComponent },
  { path: 'login',          component: LoginComponent},
  { path: '**',             component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
