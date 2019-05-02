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

  constructor(private _dataService: DataService) { }
  
  ngOnInit() {
    this._dataService.subjectCollegue.subscribe(
      collegue => {this.collegue=collegue}
    )
  }
  
  modeEdition: boolean = false;
  modeCreation: boolean = false;

  creerCollegue() {
    console.log("Création d'un nouveau collègue");
    this.modeCreation = true;
  }

  modifierCollegue() {
    console.log(`Modification du collègue`);
    this.modeEdition = true;
  }

}
