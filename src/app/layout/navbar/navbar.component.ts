import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;

    // Access the layout container and apply the relevant class
    const layoutContainer = document.querySelector('.layout-container');
    if (layoutContainer) {
      if (this.sidebarCollapsed) {
        layoutContainer.classList.add('sidebar-collapsed');
        layoutContainer.classList.remove('sidebar-expanded');
      } else {
        layoutContainer.classList.add('sidebar-expanded');
        layoutContainer.classList.remove('sidebar-collapsed');
      }
    }
  }
}
