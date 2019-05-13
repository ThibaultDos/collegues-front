import { Component, OnInit } from '@angular/core';

import { IdentificationService } from '../services/identification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedIn: boolean = false;

  connect() {
    this._identificationService.logIn();
  }

  disconnect() {
    this._identificationService.logOut();
  }

  constructor(private _identificationService: IdentificationService) { }

  ngOnInit() {
    this._identificationService.loggingState().subscribe(retour => this.loggedIn = retour);
   }
}