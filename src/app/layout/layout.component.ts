import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // const savedTheme = localStorage.getItem('selected-theme');
    // if (savedTheme) {
    //   this.themeService.switchTheme(savedTheme);
    // }
  }
  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    localStorage.setItem('selected-theme', theme);
  }
}
