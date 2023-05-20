import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  url = 'http://localhost:3000/getMovies';
  constructor(private http: HttpClient) {}
  movies() {
    return this.http.get(this.url);
  }
}
