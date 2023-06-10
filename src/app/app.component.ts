import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mypaddi-web3.0';
  constructor(private themeService: ThemeService) {
    if (this.themeService.getTheme() === 'Dark') {
      this.themeService.addDarkTheme()
    }
  }
}
