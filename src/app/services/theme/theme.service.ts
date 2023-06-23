import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  toggleTheme = (): void => {
    const theme = localStorage.getItem('theme')
    if (theme === 'Dark') {
      localStorage.setItem("theme", "Light")
      document.body.classList.remove('dark-theme')
    } else {
      localStorage.setItem("theme", "Dark")
      document.body.classList.add('dark-theme')
    }
  }

  getTheme = (): string => {
    const theme = localStorage.getItem('theme') || 'Light';
    return theme
  }

  addDarkTheme = (): void => {
    // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    // document.body.classList.toggle('dark-theme', prefersDark.matches);
    document.body.classList.add('dark-theme')
    localStorage.setItem("theme", "Dark")
  }
}
