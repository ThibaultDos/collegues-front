import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Collegue } from './models/Collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() { }

  title = 'collegues-front';

}
