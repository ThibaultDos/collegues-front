import { Component, OnInit } from '@angular/core';

import { Collegue } from '../../../models/Collegue';
import { IdentificationService } from '../../identification.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})


export class MeComponent implements OnInit {

  collegueReconnu: Collegue;

  constructor(private _identificationService: IdentificationService) { }

  infosConnection() {
    this._identificationService.successLoggedIn().subscribe(
      collegue => this.collegueReconnu = collegue);
  }

  ngOnInit() {
    this.infosConnection();
  }

}