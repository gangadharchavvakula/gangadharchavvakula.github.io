import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common'; // ✅ Only import NgIf since it's used

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf], // ✅ Use only required modules
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;
  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.menuOpen = false; // Ensure menu is closed when switching to desktop
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
