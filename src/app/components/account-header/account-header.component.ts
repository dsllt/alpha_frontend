import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-account-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account-header.component.html',
  styleUrl: './account-header.component.css',
})
export class AccountHeaderComponent {
  authPaths: Array<string> = [
    'auth/home',
    'auth/conta-corrente',
    'auth/transferencias',
    'auth/pix',
    'auth/solicitacao',
    'auth/perfil',
  ];

  tokenService = inject(TokenService);

  constructor(public router: Router) {}

  logout(): void {
    this.tokenService.delete();
    this.router.navigate(['/home']);
  }
}
