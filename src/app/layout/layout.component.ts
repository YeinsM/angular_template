import { Component } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { UserService } from '../core/services/user.service';
import { Encryption } from '../core/helpers/encryption.helper';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(private themeService: ThemeService, private us: UserService) {
    this.test();
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    localStorage.setItem('selected-theme', theme);
  }

  test() {
    const credentials = {
      username: 'test',
      password: Encryption.encrypt('admin'),
    };
    this.us.signIn(credentials).subscribe({
      next: (response) => {
        response.username = Encryption.decrypt(response.username);
        // response = Encryption.decrypt(response);
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
