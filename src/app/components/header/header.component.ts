import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private lastScrollTop = 0;
  private headerElement: HTMLElement | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.headerElement = this.el.nativeElement.querySelector('.header');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.headerElement) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show header when scrolling down
    if (scrollTop > 100) {
      this.renderer.addClass(this.headerElement, 'visible');
      this.renderer.addClass(this.headerElement, 'scrolled');
    } else {
      this.renderer.removeClass(this.headerElement, 'visible');
      this.renderer.removeClass(this.headerElement, 'scrolled');
    }

    // Hide header when scrolling up
    if (scrollTop < this.lastScrollTop) {
      this.renderer.addClass(this.headerElement, 'visible');
    }

    this.lastScrollTop = scrollTop;
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
