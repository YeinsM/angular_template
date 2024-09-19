import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { SharedModule } from '../../shared/shared.module';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { AppSidebarModule } from '../sidebar/sidebar.module';
import { ThemesComponent } from '../themes/themes.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    SharedModule,
    ThemesComponent,
    AppSidebarModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  visibleSidebar: boolean = false;
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Cars',
        icon: 'pi pi-car',
        routerLink: ['/car'],
      }
    ];
  }

  //   isMobile(): boolean {
  //     return window.innerWidth < 768; // You can adjust this value based on your desired breakpoint
  //   }
}
