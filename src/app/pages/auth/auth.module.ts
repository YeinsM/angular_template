import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FloatLabelModule,
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class AuthModule { }
