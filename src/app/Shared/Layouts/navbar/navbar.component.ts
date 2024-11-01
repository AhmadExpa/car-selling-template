import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSearchPopupVisible = false;
  isDesktop = true;

  constructor() {
    this.checkScreenSize();
  }

  toggleSearchPopup() {
    this.isSearchPopupVisible = !this.isSearchPopupVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 768; // Adjust breakpoint as needed
  }
}
