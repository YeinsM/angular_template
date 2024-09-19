import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ThemesComponent } from './themes/themes.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ThemesComponent, TopbarComponent, RouterModule],
  exports: [],
})
export class LayoutModule {}
