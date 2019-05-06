import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  listePhotoUrl: string[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  afficherToutesLesPhotos() {
    this._dataService.recupererToutesLesPhotos()
      .subscribe(toutesLesPhotosServeur => {
        this.listePhotoUrl = toutesLesPhotosServeur
      },
        error => { },
        () => { }
      );
  }

}
