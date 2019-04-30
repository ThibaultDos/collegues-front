import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Collegue } from './models/Collegue';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="text-center">Administration collègues</h1>
    <div class="row">
      <div class="col-4">
        <app-recherche-collegue-par-nom></app-recherche-collegue-par-nom>
      </div>

      <div class="col-8">
        <app-collegue [collegueMock]="collegue"></app-collegue>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  collegueMock :Collegue;
  collegue :Collegue;

  constructor(private _dataSrv: DataService) { }

  ngOnInit() {
    this.collegueMock = this._dataSrv.recupererCollegueCourant();
    this.collegue = this.collegueMock;
  }


  title = 'collegues-front';

}
