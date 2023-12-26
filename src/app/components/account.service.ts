import { Injectable } from '@angular/core';
import { Login } from '../interfaces/Login';
import { NewAccount } from '../interfaces/NewAccount';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly apiUrl = 'http://localhost:8080';

  async createClient(clientInfo: NewAccount) {
    const data = await fetch(this.apiUrl + '/client', {
      method: 'POST',
      body: JSON.stringify(clientInfo),
    });
    return data;
  }

  async authClient(clientData: Login) {
    const data = await fetch(this.apiUrl + '/client/auth', {
      method: 'POST',
      body: JSON.stringify(clientData),
      cache: 'no-cache',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

    if (data.status === 200) {
      return data.json();
    } else if (data.status === 401) {
      throw new Error(`Usuário ou senha inválidos. Status: ${data.status}`);
    } else {
      throw new Error('Error authenticating');
    }
  }

  // updateClient(clientInfo: NewAccount) {
  //   return this.http.put<NewAccount>(this.apiUrl + '/client', clientInfo);
  // }

  // createAccount(approvalDate: any) {
  //   return this.http.post(this.apiUrl + '/account', approvalDate);
  // }

  // accessAccount() {
  //   return this.http.get(this.apiUrl + '/account');
  // }

  // createTrackingAccount(status: String) {
  //   return this.http.post(this.apiUrl + '/account-tracking', status);
  // }

  // accessTrackingAccount() {
  //   return this.http.get(this.apiUrl + '/account-tracking');
  // }
}
