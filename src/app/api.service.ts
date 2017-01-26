import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    public http: Http
  ) { }

  fetch(search) {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC`)
      .map( res => res.json() );
  }

}
