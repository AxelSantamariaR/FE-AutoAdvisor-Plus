import { MaterialModule } from './shared/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdvisorsPageComponent } from './components/advisors-page/advisors-page.component';
import { UsedCarsPageComponent } from './components/used-cars-page/used-cars-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardCarComponent } from './layouts/card-car/card-car.component';
import { UsedCardsComponent } from './layouts/used-cards/used-cards.component';
import { MisionVisionComponent } from './layouts/mision-vision/mision-vision.component';
import { CardAsesoresComponent } from './layouts/card-asesores/card-asesores.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardNavComponentComponent } from './modules/dashboard/dashboard-nav-component/dashboard-nav-component.component';
import { SettingCarsComponent } from './modules/dashboard/components/cars/setting-cars/setting-cars.component';
import { SettingAdvisorComponent } from './modules/dashboard/components/advisors/setting-advisor/setting-advisor.component';
import { SettingUsedCarsComponent } from './modules/dashboard/components/used-cars/setting-used-cars/setting-used-cars.component';
import { AdministratorsComponent } from './modules/dashboard/components/administrators/administrators.component';
import { AddEditCarComponent } from './modules/dashboard/components/cars/add-edit-car/add-edit-car.component';
import { InfoCarComponent } from './modules/dashboard/components/cars/info-car/info-car.component';
import { DeleteCarComponent } from './modules/dashboard/components/cars/delete-car/delete-car.component';
import { RespuestaUsedComponent } from './modules/dashboard/components/used-cars/respuesta-used/respuesta-used.component';
import { UsedCardFormComponent } from './layouts/used-card-form/used-card-form.component';
import { CardAsesoresPageComponent } from './layouts/card-asesores-page/card-asesores-page.component';
import { AsesoresSendCorreoComponent } from './layouts/asesores-send-correo/asesores-send-correo.component';
import { AddEditAdvisorComponent } from './modules/dashboard/components/advisors/add-edit-advisor/add-edit-advisor.component';
import { InfoAdvisorComponent } from './modules/dashboard/components/advisors/info-advisor/info-advisor.component';
import { DeleteAdvisorComponent } from './modules/dashboard/components/advisors/delete-advisor/delete-advisor.component';
import { NavMenuComponent } from './layouts/nav-menu/nav-menu.component';
import { CarCitaFormComponent } from './layouts/car-cita-form/car-cita-form.component';
import { SettingCitasComponent } from './modules/dashboard/components/citas/setting-citas/setting-citas.component';
import { EditDeleteCitasComponent } from './modules/dashboard/components/citas/edit-delete-citas/edit-delete-citas.component';
import { InfoCitasComponent } from './modules/dashboard/components/citas/info-citas/info-citas.component';
import { CatalogoPageComponent } from './components/catalogo-page/catalogo-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdvisorsPageComponent,
    UsedCarsPageComponent,
    ContactPageComponent,
    FooterComponent,
    PageNotFoundComponent,
    CarsPageComponent,
    CardCarComponent,
    UsedCardsComponent,
    MisionVisionComponent,
    CardAsesoresComponent,
    LoginComponent,
    DashboardNavComponentComponent,
    SettingCarsComponent,
    SettingAdvisorComponent,
    SettingUsedCarsComponent,
    AdministratorsComponent,
    AddEditCarComponent,
    InfoCarComponent,
    DeleteCarComponent,
    RespuestaUsedComponent,
    UsedCardFormComponent,
    CardAsesoresPageComponent,
    AsesoresSendCorreoComponent,
    AddEditAdvisorComponent,
    InfoAdvisorComponent,
    DeleteAdvisorComponent,
    NavMenuComponent,
    SettingCitasComponent,
    CarCitaFormComponent,
    EditDeleteCitasComponent,
    InfoCitasComponent,
    CatalogoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
    }),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
