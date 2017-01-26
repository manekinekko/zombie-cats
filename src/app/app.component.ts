import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zombie Cats!';
  cats;

  constructor(
    public api: ApiService
  ) {

    this.api.fetch('cat')
      .subscribe( cats => this.cats = cats.data);
  }
}
