import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(prefersDark ? this.DARK_THEME : this.LIGHT_THEME);
    }
  }

  toggleTheme(): void {
    const currentTheme = document.documentElement.classList.contains(this.DARK_THEME) 
      ? this.LIGHT_THEME 
      : this.DARK_THEME;
    
    this.setTheme(currentTheme);
  }

  private setTheme(theme: string): void {
    document.documentElement.classList.remove(this.DARK_THEME, this.LIGHT_THEME);
    document.documentElement.classList.add(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  isDarkTheme(): boolean {
    return document.documentElement.classList.contains(this.DARK_THEME);
  }
} 