import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { GalerieComponent } from './galerie/galerie.component';

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'galerie', component: GalerieComponent },
    { path: 'apropos', component: AproposComponent }
];