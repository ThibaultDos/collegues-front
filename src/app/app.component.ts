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
        <app-collegue [collegue]="collegue"></app-collegue>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  collegue :Collegue;

  constructor(private _dataService: DataService) { }

  ngOnInit() { }


  title = 'collegues-front';

}
