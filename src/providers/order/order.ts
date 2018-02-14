import { Http} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';
@Injectable()
export class OrderProvider {
  ulr: String;
  constructor(public http: Http) {
    this.ulr='https://jsonplaceholder.typicode.com';

  }
  getPosts(){
    return this.http.get(`${this.ulr}/posts?userId=1`)
        .map(res=>res.json());
  }
  getComments(){
    return this.http.get(`${this.ulr}/posts/1/comments`)
        .map(res=>res.json());
  }
  getUsers(){
    return this.http.get(`${this.ulr}/users`)
        .map(res=>res.json());
  }
  getAlbums(){
    return this.http.get(`${this.ulr}/albums`)
        .map(res=>res.json());
  }
  getPhotos(){
    return this.http.get(`${this.ulr}/photos?userId=1`)
        .map(res=>res.json());
  }

}
