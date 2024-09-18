import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppMenuitemComponent } from '../layout/sidebar/sidebar-item.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, RippleModule, CardModule],
  exports: [ButtonModule, RippleModule, CardModule],
})
export class SharedModule {}
