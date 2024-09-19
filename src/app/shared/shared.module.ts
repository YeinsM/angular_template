import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { UppercaseDirective } from './inputUpperCase/uppercase.directive';

@NgModule({
  declarations: [UppercaseDirective],
  imports: [CommonModule, ButtonModule, RippleModule, CardModule],
  exports: [ButtonModule, RippleModule, CardModule, UppercaseDirective],
})
export class SharedModule {}
