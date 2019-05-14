import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this._identificationService.seDeconnecter().subscribe ();
    this._identificationService.logOut();
    this._router.navigate(['/accueil']);
  }

  constructor(private _identificationService: IdentificationService, private _router: Router) { }

  ngOnInit() {
    this._identificationService.loggingState().subscribe(retour => this.loggedIn = retour);
   }
}