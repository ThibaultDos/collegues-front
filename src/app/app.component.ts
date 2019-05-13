import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() { }

  title = 'collegues-front';

}
