import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/shared/models/movie-list.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'paradiso-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  moviePost: MovieList[] = [];
  constructor(public movieList: ApiService) {}

  ngOnInit(): void {
    this.movieList.getMovieList().subscribe((data) => {
      this.moviePost = data;
    });
  }
}
