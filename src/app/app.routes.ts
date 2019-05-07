import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { GalerieComponent } from './galerie/galerie.component';
import { InfoscollegueComponent } from './infoscollegue/infoscollegue.component';


export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'galerie', component: GalerieComponent },
    { path: 'galerie/:matricule', component: InfoscollegueComponent },
    { path: 'apropos', component: AproposComponent }
];