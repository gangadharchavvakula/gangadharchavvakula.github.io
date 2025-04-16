import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="theme-toggle" (click)="toggleTheme()" [class.dark]="isDarkTheme">
      <span class="theme-icon">{{ isDarkTheme ? '🌙' : '☀️' }}</span>
    </button>
  `,
  styles: [`
    .theme-toggle {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: var(--theme-toggle-bg);
      border: 2px solid var(--theme-toggle-border);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .theme-toggle:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    .theme-icon {
      font-size: 1.5rem;
      transition: transform 0.3s ease;
    }

    .theme-toggle:hover .theme-icon {
      transform: rotate(15deg);
    }

    @media (max-width: 768px) {
      .theme-toggle {
        bottom: 1.5rem;
        right: 1.5rem;
        width: 2.5rem;
        height: 2.5rem;
      }

      .theme-icon {
        font-size: 1.2rem;
      }
    }
  `]
})
export class ThemeToggleComponent {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.isDarkTheme();
  }
} 