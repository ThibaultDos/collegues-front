import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../services/data.service';

import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;

  collegueModif: Collegue;

  constructor(private _dataService: DataService) { }

  modeEdition: boolean = false;
  modeCreation: boolean = false;

  ngOnInit() {
    this._dataService.subjectCollegue.subscribe(
      collegue => {
        this.collegue = collegue;
      }
    )
  }

  creerCollegue() {
    console.log("Création d'un nouveau collègue");
    this.modeEdition = false;
    this.modeCreation = true;
  }

  modifierCollegue() {
    console.log(`Modification du collègue`);
    this.modeEdition = true;
    this.collegueModif = new Collegue(
      this.collegue.matricule,
      this.collegue.nom,
      this.collegue.prenoms,
      this.collegue.email,
      this.collegue.dateDeNaissance,
      this.collegue.photoUrl
    );
  }

  submit() {
    this.modeEdition = false;
    console.log(this.collegueModif);
    const email = this.collegueModif.email;
    const photoUrl = this.collegueModif.photoUrl;

    if (email) {
      this._dataService.modifierEmail(this.collegueModif.matricule, email)
        .subscribe(
          (col) => { this.collegue = col },
          error => { },
          () => { }
        );
    }

    if (photoUrl) {
      this._dataService.modifierPhotoUrl(this.collegueModif.matricule, photoUrl)
        .subscribe(
          (col) => { this.collegue = col },
          error => { },
          () => { }
        );
    }

  }




}
