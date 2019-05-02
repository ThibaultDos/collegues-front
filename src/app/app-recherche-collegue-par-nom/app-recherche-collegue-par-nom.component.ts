import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})

export class AppRechercheCollegueParNomComponent implements OnInit {

  listeMatriculesMock: string[];

  constructor(private _dataSrv: DataService) { }

  ngOnInit() {
  }

  afficherCollegue(nom : string) {
    this.listeMatriculesMock = this._dataSrv.rechercherParNom(nom);
  }


}
