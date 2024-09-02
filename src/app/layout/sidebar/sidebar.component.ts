import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SharedModule } from '../../shared/shared.module';
>>>>>>> d9936a6c6ed67342c001cdaa5aeefc2ae4a60634

@Component({
  selector: 'app-sidebar',
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [CommonModule, SidebarModule, SharedModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onHide() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  save() {
    console.log(this.visible);
    // Add save logic here
    this.visible = false;
>>>>>>> d9936a6c6ed67342c001cdaa5aeefc2ae4a60634
  }

  cancel() {
    // Add cancel logic here
<<<<<<< HEAD
    this.visibleSidebar = false;
=======
    this.visible = false;
>>>>>>> d9936a6c6ed67342c001cdaa5aeefc2ae4a60634
  }
}
