import { Injectable, inject } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { TokenService } from './token.service';
import { environment } from '../../environments/environment';
import { Login } from '../interfaces/login.ts';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  constructor() {}

  tokenService = inject(TokenService);
  http = inject(HttpClient);

  auth(clientData: Login): Observable<HttpResponse<AuthResponse>> {
    return this.http
      .post<AuthResponse>(this.apiUrl + '/client/auth', clientData, {
        observe: 'response',
      })
      .pipe(
        tap((response) => {
          const authToken = response.body!.access_token;
          const expiresIn = response.body!.expires_in;
          this.tokenService.save(authToken, expiresIn);
        })
      );
  }
}
