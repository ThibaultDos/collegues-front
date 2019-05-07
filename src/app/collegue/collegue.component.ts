import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

import { Collegue } from '../models/Collegue';

const imageParDefaut: string = "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fdhs.gov%2Fsites%2Fdefault%2Ffiles%2Fimages%2FREAL-ID_icon_public.png&f=1";
let imageBackup = '';
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  collegue: Collegue = new Collegue('', '', '', undefined, '', imageParDefaut);
  collegueModif: Collegue = new Collegue('', '', '', undefined, '', imageParDefaut);
  collegueAjout: Collegue = new Collegue('', '', '', undefined, '', imageParDefaut);

  modeEdition: boolean = false;
  modeCreation: boolean = false;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.subjectCollegue.subscribe(
      collegue => {
        this.collegue = collegue;
      }
    )
  }

  submit() {
    if (this.modeCreation) {
      this.collegue.photoUrl = imageParDefaut;
      this._dataService.ajouterCollegue(this.collegueAjout)
        .subscribe(
          (col) => {
            this.collegue = col
          },
          (error: Error) => { },
          () => { }
        );
      this.modeCreation = false;
    } else if (this.modeEdition) {

      this.collegueModif.matricule = this.collegue.matricule;
      const email: string = this.collegueModif.email;
      const photoUrl: string = this.collegueModif.photoUrl;

      if (email) {
        this._dataService.modifierEmail(this.collegueModif.matricule, email)
          .subscribe(
            (col) => { this.collegueModif = col },
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

  creation(): void {
    imageBackup = this.collegue.photoUrl;
    this.collegue.photoUrl = imageParDefaut;

    console.log("Création d'un nouveau collègue");
    this.modeCreation = true;
    this.modeEdition = false;
  }

  edition(): void {
    console.log(`Modification du collègue`);
    this.modeEdition = true;
    this.modeCreation = false;
  }

  annuler() {
    this.collegue.photoUrl = imageBackup;
    this.modeCreation = false;
    this.modeEdition = false;
  }
}
