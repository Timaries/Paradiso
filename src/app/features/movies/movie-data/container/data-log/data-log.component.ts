import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/shared/models/movie-list.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'paradiso-data-log',
  templateUrl: './data-log.component.html',
  styleUrls: ['./data-log.component.scss'],
})
export class DataLogComponent {
  movieInfo: MovieList[] = [];
  constructor(public movieList: ApiService) {}
}
