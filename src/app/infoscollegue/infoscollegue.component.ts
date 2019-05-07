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

  matricule: string;
  displayedCollegue: Collegue;

  constructor(private route: ActivatedRoute, private _dataService:DataService) {
    this.matricule = route.snapshot.paramMap.get("matricule");
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const matricule = params.get('matricule');
    });
    this._dataService.rechercherCollegueParMatricule(this.matricule).subscribe(
      (collegue:Collegue) => { this.displayedCollegue = collegue},
      (error:Error) => { `${error.name} -> ${error.message}`},
      () => { }
    );
  }

}
