import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = 'http://localhost:8000/api/characters';
const HEADER = {headers: new Headers({'content-type': 'application.json'})};

@Injectable()
export class CharacterService {

  constructor(public http: HttpClient) { }

    getAll() {
      return this.http.get(BASE_URL).toPromise();
    }
}
