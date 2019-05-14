import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../../models/Utilisateur';
import { IdentificationService } from '../identification.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  user: Utilisateur = new Utilisateur('', '', '');
  loggedIn: boolean;

  constructor(private _identificationService: IdentificationService, private _router: Router) { }

  identification() {

    this._identificationService.seConnecter(this.user)
      .subscribe(
        (user) => {
          this.user = user;
          this._identificationService.logIn();
        },
        (error: Error) => { },
        () => { }
      );

    this._identificationService.loggingState().subscribe(retour => {
      this.loggedIn = retour
      this._router.navigate(['/me']);
    });
    
  }

  ngOnInit() {
  }

}