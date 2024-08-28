import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-themes',
  imports: [CommonModule, SpeedDialModule],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ThemesComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private themeService: ThemeService) {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      this.themeService.switchTheme(savedTheme);
    }
  }

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          //   this.messageService.add({
          //     severity: 'info',
          //     summary: 'Add',
          //     detail: 'Data Added',
          //   });
        },
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          //   this.messageService.add({
          //     severity: 'success',
          //     summary: 'Update',
          //     detail: 'Data Updated',
          //   });
        },
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          //   this.messageService.add({
          //     severity: 'error',
          //     summary: 'Delete',
          //     detail: 'Data Deleted',
          //   });
        },
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload'],
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io',
      },
    ];
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    localStorage.setItem('selected-theme', theme);
  }
}
