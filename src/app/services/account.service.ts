import { Injectable, inject } from '@angular/core';
import { NewAccount } from '../interfaces/new-account';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { AccountInfo } from '../interfaces/account-info';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly apiUrl = environment.apiUrl;
  accountInfo: {
    accountId?: string;
    clientId?: string;
    name?: string;
    cnpj?: string;
    phone?: string;
    email?: string;
    address?: string;
    cep?: string;
    approvalDate?: string;
    requestDate?: string;
  } = {};

  http = inject(HttpClient);

  async createClient(clientInfo: NewAccount) {
    const data = await fetch(this.apiUrl + '/client', {
      method: 'POST',
      body: JSON.stringify(clientInfo),
    });
    return data;
  }

  // updateClient(clientInfo: NewAccount) {
  //   return this.http.put<NewAccount>(this.apiUrl + '/client', clientInfo);
  // }

  // createAccount(approvalDate: any) {
  //   return this.http.post(this.apiUrl + '/account', approvalDate);
  // }

  accessAccount() {
    return this.http.get(this.apiUrl + '/account/').pipe(
      tap((response) => {
        this.accountInfo = response;
      })
    );
  }

  getAccountInfo(): AccountInfo {
    const accountInfoObject = {
      accountId: this.accountInfo.accountId!,
      clientId: this.accountInfo.clientId!,
      name: this.accountInfo.name!,
      cnpj: this.accountInfo.cnpj!,
      phone: this.accountInfo.phone!,
      email: this.accountInfo.email!,
      address: this.accountInfo.address!,
      cep: this.accountInfo.cep!,
      approvalDate: this.accountInfo.approvalDate!,
      requestDate: this.accountInfo.requestDate!,
    };

    return accountInfoObject;
  }

  // createTrackingAccount(status: String) {
  //   return this.http.post(this.apiUrl + '/account-tracking', status);
  // }

  // accessTrackingAccount() {
  //   return this.http.get(this.apiUrl + '/account-tracking');
  // }
}
