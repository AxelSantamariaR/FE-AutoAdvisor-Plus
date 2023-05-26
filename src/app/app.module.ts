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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdvisorsPageComponent,
    UsedCarsPageComponent,
    ContactPageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
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
