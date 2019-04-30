import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegueMock: Collegue;
  
  collegue : Collegue = this.collegueMock;

  constructor() { }
  
  ngOnInit() {
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
