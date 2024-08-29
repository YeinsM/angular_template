import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-themes',
  imports: [CommonModule, SharedModule],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ThemesComponent implements OnInit {
  theme: string = '';

  constructor(private themeService: ThemeService) {
    const savedTheme = localStorage.getItem('selected-theme');
    if (!savedTheme) {
      localStorage.setItem('selected-theme', 'blue-light');
      this.changeTheme();
    }

    this.theme = savedTheme || 'blue-light';

    if (savedTheme) {
      this.themeService.switchTheme(savedTheme);
    }
  }

  ngOnInit(): void { }

  changeTheme() {
    if (this.theme === 'blue-light') {
      this.theme = 'blue-dark';
    } else {
      this.theme = 'blue-light';
    }

    this.themeService.switchTheme(this.theme);
    localStorage.setItem('selected-theme', this.theme);
  }
}
