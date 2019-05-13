import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { GalerieComponent } from './galerie/galerie.component';
import { InfoscollegueComponent } from './infoscollegue/infoscollegue.component';
import { IdentificationComponent } from './services/identification/identification.component';
import { MeComponent } from './services/identification/me/me.component';


export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'galerie', component: GalerieComponent },
    { path: 'galerie/:matricule', component: InfoscollegueComponent },
    { path: 'apropos', component: AproposComponent },
    { path: 'identification', component: IdentificationComponent },
    { path: 'me', component: MeComponent },
];