import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpHeaders, httpResource } from '@angular/common/http';
import { MovieResponse } from '../../core/interfaces/movie';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  private readonly apiUrl: string =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  private readonly apiKey: string = environment.apiKey;

  movies$ = httpResource<MovieResponse>(() => ({
    url: this.apiUrl,
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
    }),
  }));
}
