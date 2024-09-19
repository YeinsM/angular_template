import { NgModule } from '@angular/core';
import { AppMenuitemComponent } from './sidebar-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [AppMenuitemComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, SharedModule, SidebarModule],
  exports: [AppMenuitemComponent, SidebarComponent],
})
export class AppSidebarModule {}
