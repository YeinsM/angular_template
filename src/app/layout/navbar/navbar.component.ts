import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api'; // Import MenuItem
>>>>>>> d9936a6c6ed67342c001cdaa5aeefc2ae4a60634
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [CommonModule, MenubarModule, ButtonModule, SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  visibleSidebar: boolean = false;

  toggleSidebar() {
    this.visibleSidebar = !this.visibleSidebar;
  }

  isMobile(): boolean {
    return window.innerWidth < 768; // You can adjust this value based on your desired breakpoint
  }
  
  menuItems: MenuItem[] = [
    {
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus', command: () => this.onNew() },
        {
          label: 'Open',
          icon: 'pi pi-fw pi-external-link',
          command: () => this.onOpen(),
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-times',
          command: () => this.onQuit(),
        },
      ],
    },
    {
      label: 'Edit',
      items: [
        {
          label: 'Undo',
          icon: 'pi pi-fw pi-refresh',
          command: () => this.onUndo(),
        },
        {
          label: 'Redo',
          icon: 'pi pi-fw pi-repeat',
          command: () => this.onRedo(),
        },
      ],
    },
    {
      label: 'Help',
      items: [
        {
          label: 'Contents',
          icon: 'pi pi-fw pi-book',
          command: () => this.onHelpContents(),
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-search',
          command: () => this.onHelpSearch(),
        },
      ],
    },
    {
      label: 'Account',
      icon: 'pi pi-fw pi-user',
      command: () => this.onAccount(),
    },
  ];

  // Example methods for menu commands
  onNew() {
    console.log('New clicked');
  }

  onOpen() {
    console.log('Open clicked');
  }

  onQuit() {
    console.log('Quit clicked');
  }

  onUndo() {
    console.log('Undo clicked');
  }

  onRedo() {
    console.log('Redo clicked');
  }

  onHelpContents() {
    console.log('Help Contents clicked');
  }

  onHelpSearch() {
    console.log('Help Search clicked');
  }

  onAccount() {
    console.log('Account clicked');
>>>>>>> d9936a6c6ed67342c001cdaa5aeefc2ae4a60634
  }
}
