import { Component, createPlatform } from "@angular/core";
import { Routes } from "@angular/router";
import { MovieListComponent } from "./container/movie-list/movie-list.component";
import { DataLogComponent } from "./movie-data/container/data-log/data-log.component";

export const routes2: Routes = [
    {path: '', component: MovieListComponent},
    {path: 'movie/:id/:title', component: DataLogComponent }
]