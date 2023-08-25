import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { AdvisorsPageComponent } from './components/advisors-page/advisors-page.component';
import { UsedCarsPageComponent } from './components/used-cars-page/used-cars-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { DashboardNavComponentComponent } from './modules/dashboard/dashboard-nav-component/dashboard-nav-component.component';
import { SettingCarsComponent } from './modules/dashboard/components/cars/setting-cars/setting-cars.component';
import { SettingAdvisorComponent } from './modules/dashboard/components/advisors/setting-advisor/setting-advisor.component';
import { SettingUsedCarsComponent } from './modules/dashboard/components/used-cars/setting-used-cars/setting-used-cars.component';
import { AdministratorsComponent } from './modules/dashboard/components/administrators/administrators.component';
import { SettingCitasComponent } from './modules/dashboard/components/citas/setting-citas/setting-citas.component';
import { CatalogoPageComponent } from './components/catalogo-page/catalogo-page.component';

const routes: Routes = [
  { path:'',                    redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',               component: HomePageComponent },
  { path: 'autos/:id',          component: CarsPageComponent},
  { path: 'asesores',           component: AdvisorsPageComponent,  },
  { path: 'usados',             component: UsedCarsPageComponent },
  { path: 'catalogo',           component: CatalogoPageComponent },
  { path: 'nosotros',           component: ContactPageComponent },
  { path: 'login',              component: LoginComponent },
  { path: 'dashboard',          component: DashboardNavComponentComponent, 
    children: [
      { path: 'cars',           component: SettingCarsComponent},
      { path: 'advisors',       component: SettingAdvisorComponent },
      { path: 'usedCars',       component: SettingUsedCarsComponent },
      { path: 'citas',          component: SettingCitasComponent },      
      { path: 'administrators', component: AdministratorsComponent},
    ]},
  { path: '**',                 component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
