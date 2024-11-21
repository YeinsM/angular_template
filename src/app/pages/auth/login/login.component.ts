import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Form Configurations variables
  form!: FormGroup;
  submitted: boolean = false;
  showPassword: boolean = false;

  // User
  users: User[] = [];
  user!: User;

  data = [
    { user: 'Juan Pérez ', date: '2024/01/10', isChecked: false },
    { user: 'Ana Gómez', date: '2023/13/45', isChecked: true },
    { user: '   Pedro Jiménez', date: 'InvalidDate', isChecked: false },
    { user: 'Lucía Márquez ', date: '2022/11/12', isChecked: false },
    { user: 'Carlos López', date: '', isChecked: true },
    { user: 'Maria_123', date: '20-01-2022', isChecked: false },
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.formControl();
  }

  onCheckChange(row: any) {
    console.log(`Row updated:`, row);
  }

  formControl() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  }

  onLogin() {
    if (this.form.get('email')?.valid) {
      this.userService.getUserByEmail(this.form.value.email).subscribe({
        next: (data) => {
          this.showPassword = true;
          this.form.get('password')?.setValidators([Validators.required]);
          this.form.get('password')?.updateValueAndValidity();

          this.user = data;
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
