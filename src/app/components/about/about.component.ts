import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const section = this.el.nativeElement.querySelector('.about-section');

        if (entry.isIntersecting) {
          this.renderer.addClass(section, 'in-view');
        } else {
          this.renderer.removeClass(section, 'in-view');
        }
      });
    }, {
      threshold: 0.4 // Trigger when 40% of the section is in view
    });

    const target = this.el.nativeElement.querySelector('.about-section');
    observer.observe(target);
  }
}