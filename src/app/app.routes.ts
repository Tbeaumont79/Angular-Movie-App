import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieDetails } from './pages/movie-details/movie-details';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'movie-details/:movieId',
    component: MovieDetails,
  },
];
