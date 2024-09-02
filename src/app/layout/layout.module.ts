import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ThemesComponent } from './themes/themes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ThemesComponent, SidebarComponent, NavbarComponent],
})
export class LayoutModule {}
