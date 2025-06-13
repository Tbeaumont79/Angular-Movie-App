import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  inject,
} from '@angular/core';
import { MovieSearchService } from '../../core/services/movie-search-service';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  @ViewChild('SearchInput') searchInput!: ElementRef<HTMLInputElement>;
  private movieSearch = inject(MovieSearchService);

  @HostListener('document:keydown', ['$event'])
  handleKeyBoardEvent(event: KeyboardEvent): void {
    const isMac = navigator.userAgent.toLowerCase().includes('mac');
    const isCmdK =
      (isMac && event.metaKey && event.key === 'k') ||
      (!isMac && event.ctrlKey && event.key === 'k');

    if (isCmdK) {
      event.preventDefault();
      this.searchInput.nativeElement.focus();
    }
  }

  onSearchInput(value: string): void {
    this.movieSearch.updateTerm(value);
  }
}
