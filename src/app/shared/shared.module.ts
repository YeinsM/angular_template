import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
<<<<<<< HEAD
import { AppMenuitemComponent } from '../layout/sidebar/sidebar-item.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, RippleModule, CardModule],
  exports: [ButtonModule, RippleModule, CardModule],
=======
import { CardModule } from 'primeng/card';
import { UppercaseDirective } from './inputUpperCase/uppercase.directive';

@NgModule({
  declarations: [UppercaseDirective],
  imports: [CommonModule, ButtonModule, RippleModule, CardModule],
  exports: [ButtonModule, RippleModule, CardModule, UppercaseDirective],
>>>>>>> 81d449b700df76efd666422720eb50ff60cb9bf3
})
export class SharedModule {}
