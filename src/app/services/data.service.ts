import { Injectable } from '@angular/core';
import { listeMatriculeMock } from '../mock/matricules.mock';
import { collegueMock } from "../mock/collegues.mock";
import { Collegue } from '../models/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  rechercherParNom(nom: string): string[] {
    return listeMatriculeMock;
  }

  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }

}
