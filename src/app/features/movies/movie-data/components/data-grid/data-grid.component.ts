import { Component, Input, OnInit } from '@angular/core';
import { MovieList } from 'src/app/shared/models/movie-list.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'paradiso-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent {
  @Input() movieInfo: MovieList[] = [];
  constructor(public movieList: ApiService) {}
}
