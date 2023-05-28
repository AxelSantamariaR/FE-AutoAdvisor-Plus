import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { AdvisorsPageComponent } from './components/advisors-page/advisors-page.component';
import { UsedCarsPageComponent } from './components/used-cars-page/used-cars-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './modules/authentication/login/login.component';

const routes: Routes = [
  { path:'',            redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',       component: HomePageComponent },
  { path: 'autos',      component: CarsPageComponent},
  { path: 'asesores',   component: AdvisorsPageComponent },
  { path: 'usados',     component: UsedCarsPageComponent },
  { path: 'nosotros',   component: ContactPageComponent },
  { path: 'login',      component: LoginComponent},
  { path: '**',         component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
