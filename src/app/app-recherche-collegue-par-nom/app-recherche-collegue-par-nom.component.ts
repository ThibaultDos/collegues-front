import { Component, OnInit, Input } from '@angular/core';

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

  afficherCollegue(rechercheCollegueParNom: HTMLInputElement) {
    this._dataService.rechercherParNom(rechercheCollegueParNom.value)
      .subscribe(tabMatsServeur => {
        this.listeMatricules = tabMatsServeur
      },
        err => { });
  }

  afficherCollegueDepuisMatricule(matriculeCollegue: string) {
    this._dataService.recupererCollegue(matriculeCollegue).subscribe(
      collegueServeur => { },
      error => { },
      () => { }
    );
  }

}
