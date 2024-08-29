import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api'; // Import MenuItem
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
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
  }
}
