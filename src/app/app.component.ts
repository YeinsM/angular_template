import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'visionUI';

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
