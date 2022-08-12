import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MovieList } from '../models/movie-list.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Get Movie List for Main Page or Search
  getMovieList(): Observable<MovieList[]> {
    return this.http.get<MovieList[]>(`${environment.apiUrl}posts`);
  }
  // Get Movie Details
  movieData: MovieList | null = null;
}
