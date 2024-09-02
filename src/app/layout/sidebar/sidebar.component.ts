import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SharedModule, SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  visibleSidebar: boolean = false;

  toggleSidebar() {
    this.visibleSidebar = !this.visibleSidebar;
  }

  save() {
    // Add save logic here
    this.visibleSidebar = false;
  }

  cancel() {
    // Add cancel logic here
    this.visibleSidebar = false;
  }
}
