import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { SharedModule } from '../../shared/shared.module';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { AppSidebarModule } from '../sidebar/sidebar.module';
import { ThemesComponent } from '../themes/themes.component';
import { LoginComponent } from '../../pages/auth/login/login.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

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
  providers: [DialogService],
})
export class TopbarComponent implements OnInit, OnDestroy {
  ref!: DynamicDialogRef;
  visibleSidebar: boolean = false;
  items: MenuItem[] | undefined;

  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Cars',
        icon: 'pi pi-car',
        routerLink: ['/car'],
      },
    ];
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  showLoginForm() {
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Sign in or create an account',
      width: '400px',
    });
  }

  //   isMobile(): boolean {
  //     return window.innerWidth < 768; // You can adjust this value based on your desired breakpoint
  //   }
}
