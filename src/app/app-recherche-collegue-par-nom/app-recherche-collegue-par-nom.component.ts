import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})

export class AppRechercheCollegueParNomComponent implements OnInit {

  listeMatricules: string[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  afficherMatriculeDepuisNom(nomCollegue: HTMLInputElement) {
    this._dataService.rechercherMatriculeParNom(nomCollegue.value)
      .subscribe(tabMatsServeur => {
        this.listeMatricules = tabMatsServeur
      },
        error => { },
        () => { }
      );
  }

  afficherTousLesMatricules() {
    this._dataService.recupererTousLesMatricules()
      .subscribe(tousLesMatriculesServeur => {
        this.listeMatricules = tousLesMatriculesServeur
      },
        error => { },
        () => { }
      );
  }

  afficherCollegueDepuisMatricule(matriculeCollegue: string) {
    this._dataService.rechercherCollegueParMatricule(matriculeCollegue).subscribe(
      collegueServeur => { },
      error => { },
      () => { }
    );
  }

}
