import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../interfaces/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public router: Router) {}

  authService = inject(AuthService);
  tokenService = inject(TokenService);

  applyForm = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  async submitLogin() {
    var clientData: Login = {
      email: this.applyForm!.value.email!,
      password: this.applyForm?.value.password!,
    };

    this.authService.auth(clientData).subscribe({
      error: (e) => alert(e.error),
      complete: () => this.router.navigate(['/auth/home']),
    });
  }
}
