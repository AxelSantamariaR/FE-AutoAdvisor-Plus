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
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { UsadosTerminosPageComponent } from './layouts/usados-terminos-page/usados-terminos-page.component';
import { UsadosSolicitarPageComponent } from './layouts/usados-solicitar-page/usados-solicitar-page.component';
import { UsadosSeguimientoPageComponent } from './layouts/usados-seguimiento-page/usados-seguimiento-page.component';
import { UsadosHomePageComponent } from './layouts/usados-home-page/usados-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdvisorsPageComponent,
    UsedCarsPageComponent,
    ContactPageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent,
    CarsPageComponent,
    UsadosTerminosPageComponent,
    UsadosSolicitarPageComponent,
    UsadosSeguimientoPageComponent,
    UsadosHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
