import { Component } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(private themeService: ThemeService) { }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    localStorage.setItem('selected-theme', theme);
  }
}
