import { Component, computed, inject } from '@angular/core';
import { HttpHeaders, httpResource } from '@angular/common/http';
import { MovieResponse } from '../../core/interfaces/movie';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { environment } from '../../../environments/environment.development';
import { debounceTime } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MovieSearchService } from 'src/app/core/services/movie-search-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './home.html',
})
export class Home {
  private readonly apiUrl: string =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  private readonly apiKey: string = environment.apiKey;
  private searchService = inject(MovieSearchService);
  search = computed(() => this.searchService.term());

  debouncedSearch = toSignal(toObservable(this.search).pipe(debounceTime(600)));

  movies$ = httpResource<MovieResponse>(() => ({
    url:
      this.search() == ''
        ? this.apiUrl
        : `https://api.themoviedb.org/3/search/movie?query=${this.debouncedSearch()}`,
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
    }),
  }));
}
