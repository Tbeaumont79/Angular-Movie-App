import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieSearchService {
  private searchTerm = signal('');
  public readonly term = computed(() => this.searchTerm());

  updateTerm(newTerm: string) {
    this.searchTerm.set(newTerm);
  }
}
