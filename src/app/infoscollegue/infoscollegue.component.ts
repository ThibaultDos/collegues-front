import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-infoscollegue',
  templateUrl: './infoscollegue.component.html',
  styleUrls: ['./infoscollegue.component.css']
})

export class InfoscollegueComponent implements OnInit {

  matriculePrev: string = null;
  matricule: string = null;
  matriculeNext: string = null;
  displayedCollegue: Collegue = null;
  tousLesMatricules: string[] = null;

  constructor(private route: ActivatedRoute, private _dataService: DataService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.matricule = params.get('matricule');

      this._dataService.rechercherCollegueParMatricule(this.matricule).subscribe(
        (collegue: Collegue) => { this.displayedCollegue = collegue },
        (error: Error) => { `${error.name} -> ${error.message}` },
        () => { }
      );
      this.parcoursMatricule();
    });

  }

  parcoursMatricule(): void {

    this._dataService.recupererTousLesMatricules().subscribe(
      (liste: string[]) => {
        if (liste.includes(this.matricule)) {

          const indexOfMatricule: number = liste.indexOf(this.matricule);

          if (indexOfMatricule == 0) {
            this.matriculePrev = null;
            this.matriculeNext = liste[indexOfMatricule + 1];
          } else if (indexOfMatricule == liste.length - 1) {
            this.matriculePrev = liste[indexOfMatricule - 1];
            this.matriculeNext = null;
          } else {
            this.matriculePrev = liste[indexOfMatricule - 1];
            this.matriculeNext = liste[indexOfMatricule + 1];
          }
        }
      },
      (error: Error) => { `${error.name} -> ${error.message}` },
      () => { }
    );
  }

}
