import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../account.service';
import { CommonModule } from '@angular/common';
import { Login } from '../../interfaces/Login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public router: Router) {}

  accountService = inject(AccountService);

  applyForm = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  async submitLogin() {
    var clientData: Login = {
      email: this.applyForm!.value.email!,
      password: this.applyForm?.value.password!,
    };

    try {
      var response = await this.accountService.authClient(clientData);
      localStorage.setItem('token', response.access_token);
      localStorage.setItem('token_expires_in', response.expires_in);
      this.router.navigate(['/auth/home']);
    } catch (err) {
      console.log('err', err);
      alert(err);
    }
  }
}
