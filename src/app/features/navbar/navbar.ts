import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  @ViewChild('SearchInput') searchInput!: ElementRef<HTMLInputElement>;
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
}
