import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Subject, Observable } from 'rxjs';
import { tap, flatMap } from "rxjs/operators";

import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { Utilisateur } from '../models/Utilisateur';

import { environment } from '../../environments/environment';
const URL_BACKEND = environment.backendURL;

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {

  private _subjectUtilisateur = new Subject<Utilisateur>();
  private _loggingSubject = new Subject<boolean>();

  collegueReconnu: Collegue;

  constructor(private _http: HttpClient, private _dataService: DataService) { }

  publish(data: Utilisateur) {
    this._subjectUtilisateur.next(data);
  }

  seConnecter(user: Utilisateur): Observable<Utilisateur> {
    const body = {
      'identifiant': user.identifiant,
      'motDePasse': user.motDePasse,
    }
    return this._http.post<Utilisateur>(`${URL_BACKEND}/identification`, body, { withCredentials: true })
      .pipe(tap(user => {
        this.publish(user)
      }),
        flatMap(col => {
          return this._http.get<Utilisateur>(`${URL_BACKEND}/collegues/me`, { withCredentials: true });
        })
      );
  }

  successLoggedIn(): Observable<Collegue> {
    this._dataService.rechercherCollegueParMail();
    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/me`, { withCredentials: true })
  }

  loggingState() {
    return this._loggingSubject.asObservable();
  }

  logIn() {
    this._loggingSubject.next(true);
  }

  logOut() {
    this._loggingSubject.next(false);
  }

}