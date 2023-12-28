import { Injectable } from '@angular/core';
import moment from 'moment';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  save(access_token: string, expires_in: string) {
    localStorage.setItem(KEY, access_token);
    localStorage.setItem('token_expires_in', expires_in);
  }

  delete() {
    localStorage.removeItem(KEY);
    localStorage.removeItem('token_expires_in');
  }

  get() {
    return localStorage.getItem(KEY) ?? '';
  }

  verify() {
    return !!this.get();
  }

  getExpiration() {
    const expiration = localStorage.getItem('token_expires_in');
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
