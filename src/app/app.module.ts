import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRechercheCollegueParNomComponent } from './app-recherche-collegue-par-nom/app-recherche-collegue-par-nom.component';
import { CollegueComponent } from './collegue/collegue.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { AccueilComponent } from './accueil/accueil.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AproposComponent } from './apropos/apropos.component';

@NgModule({
  declarations: [AppComponent, CollegueComponent, AppRechercheCollegueParNomComponent, UrlValidatorDirective, EmailValidatorDirective, MenuComponent, AccueilComponent, GalerieComponent, AproposComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
