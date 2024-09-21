import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { UppercaseDirective } from './inputUpperCase/uppercase.directive';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { FilterByStatusPipe } from './filters/filterByStatus.filter';
import { FilterByYearAscPipe } from './filters/filterByYear.filter';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [UppercaseDirective, FilterByStatusPipe, FilterByYearAscPipe],
  imports: [CommonModule,
    ButtonModule,
    RippleModule,
    CardModule,
    BadgeModule,
    TooltipModule,
    DropdownModule],
  exports: [ButtonModule,
    RippleModule,
    CardModule,
    UppercaseDirective,
    BadgeModule,
    TooltipModule,
    FilterByStatusPipe,
    FilterByYearAscPipe,
    DropdownModule],
})
export class SharedModule { }
