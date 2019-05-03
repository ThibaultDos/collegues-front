import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable } from 'rxjs';
import { tap } from "rxjs/operators";

import { Collegue } from '../models/Collegue';

import { environment } from '../../environments/environment.prod';
const URL_BACKEND = environment.backendURL;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _subjectCollegue = new Subject<Collegue>();

  get subjectCollegue(): Subject<Collegue> {
    return this._subjectCollegue;
  }

  constructor(private _http: HttpClient) { }

  publish(data: Collegue) {
    this.subjectCollegue.next(data);
  }

  rechercherCollegueParMatricule(matricule: string): Observable<Collegue> {
    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${matricule}`)
      .pipe(tap(collegue => {
        this.publish(collegue)
      }));
  }

  rechercherMatriculeParNom(nom: string): Observable<string[]> {
    return this._http.get<string[]>(`${URL_BACKEND}/collegues?nom=${nom}`);
  }

  recupererTousLesMatricules(): Observable<string[]> {
    return this._http.get<string[]>(`${URL_BACKEND}/collegues/matricules`);
  }

  ajouterCollegue(nouveauCollegue: Collegue): Observable<Collegue> {
    const body = {
      'nom': nouveauCollegue.nom,
      'prenoms': nouveauCollegue.prenoms,
      'dateDeNaissance': nouveauCollegue.dateDeNaissance,
      'photoUrl': nouveauCollegue.photoUrl
    }
    return this._http.post<Collegue>(`${URL_BACKEND}/collegues`, body);
  }

  modifierEmail(matricule:string, nouveauMail: string): Observable<Collegue> {
    const body = {
      'email': nouveauMail
    }
    return this._http.patch<Collegue>(`${URL_BACKEND}/collegues/${matricule}`, body)
      .pipe(tap(collegue => {
        this.publish(collegue)
      }));
  }

  modifierPhotoUrl(matricule:string, nouvellePhotoUrl: string): Observable<Collegue> {
    const body = {
      'photoUrl': nouvellePhotoUrl
    }
    return this._http.patch<Collegue>(`${URL_BACKEND}/collegues/${matricule}`, body)
      .pipe(tap(collegue => {
        this.publish(collegue)
      }));
  }

}
