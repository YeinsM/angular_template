import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { UppercaseDirective } from './inputUpperCase/uppercase.directive';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [UppercaseDirective],
  imports: [CommonModule, ButtonModule, RippleModule, CardModule, BadgeModule, TooltipModule],
  exports: [ButtonModule, RippleModule, CardModule, UppercaseDirective, BadgeModule, TooltipModule],
})
export class SharedModule {}
