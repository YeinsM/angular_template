import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ThemesComponent } from './themes/themes.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ThemesComponent],
})
export class LayoutModule {}
