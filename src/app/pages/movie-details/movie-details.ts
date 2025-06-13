import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { HttpHeaders, httpResource } from '@angular/common/http';
import { Movie } from '../../core/interfaces/movie';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './movie-details.html',
})
export class MovieDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  private readonly apiKey: string = environment.apiKey;
  movieId = parseInt(this.route.snapshot.paramMap.get('movieId') || '', 10);
  private readonly apiUrl: string = `https://api.themoviedb.org/3/movie/${this.movieId}`;

  movie$ = httpResource<Movie>(() => ({
    url: this.apiUrl,
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
    }),
  }));
}
