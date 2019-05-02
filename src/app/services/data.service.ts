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

  recupererCollegue(matricule: string): Observable<Collegue> {
    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${matricule}`)
      .pipe(tap(collegue => {this.publish(collegue)
      }));
  }

  rechercherParNom(nom: string): Observable<string[]> {
    return this._http.get<string[]>(`${URL_BACKEND}/collegues?nom=${nom}`);
  }

}
