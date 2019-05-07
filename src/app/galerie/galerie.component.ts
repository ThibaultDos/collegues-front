import { Component, OnInit } from '@angular/core';
import { ColleguePhoto } from '../models/ColleguePhoto';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  listeColleguePhoto: ColleguePhoto[];
  public msgError: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.afficherToutesLesPhotos()
  }

  afficherToutesLesPhotos(): void {
    this._dataService.recupererToutesLesPhotos()
      .subscribe(photoServeur => {
        this.listeColleguePhoto = photoServeur;
      },
        (error: Error) => { this.msgError = `${error.name} survenue pendant la récupération des photos:\n ${error.message}`
      console.error(`${error.name} survenue pendant la récupération des photos:\n ${error.message}`) },
        () => { }
      );
  }

}