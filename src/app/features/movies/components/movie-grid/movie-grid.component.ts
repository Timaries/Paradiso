import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieList } from 'src/app/shared/models/movie-list.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'paradiso-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
})
export class MovieGridComponent {
  @Input() moviePost: MovieList[] = [];
  constructor(private movie2: ApiService, private router: Router) {}

  seeMore(movie: MovieList) {
    this.movie2.movieData = movie
    this.router.navigate(['/movie', movie.id, movie.title,]);
  }
}
