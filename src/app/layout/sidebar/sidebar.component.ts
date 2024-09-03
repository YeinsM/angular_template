import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
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

  toggleSidebar() {
    this.visible = !this.visible;
  }

  save() {
    console.log(this.visible);
    // Add save logic here
    this.visible = false;
  }

  cancel() {
    // Add cancel logic here
    this.visible = false;
  }
}
