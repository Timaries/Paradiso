import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/movies/movies.module').then((el) => el.MoviesModule),
  },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
