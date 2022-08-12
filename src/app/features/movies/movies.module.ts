import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';
import { MovieListComponent } from './container/movie-list/movie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes2 } from './movies-routing.module';
import { DataGridComponent } from './movie-data/components/data-grid/data-grid.component';
import { DataLogComponent } from './movie-data/container/data-log/data-log.component';

@NgModule({
  declarations: [
    MovieGridComponent,
    MovieListComponent,
    DataGridComponent,
    DataLogComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes2)],
  exports: [RouterModule, MovieListComponent, MovieGridComponent],
})
export class MoviesModule {}
