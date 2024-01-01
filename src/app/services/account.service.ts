import { Injectable, inject } from '@angular/core';
import { NewAccount } from '../interfaces/new-account';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { switchMap, tap } from 'rxjs';
import { AccountInfo } from '../interfaces/account-info';
import { TrackingAccountInfo } from '../interfaces/tracking-account-info';

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
    address?: {
      street?: string;
      building?: string;
      sub_building?: string;
      city?: string;
      state?: string;
      country?: string;
      cep?: string;
    };
    approvalDate?: string;
    requestDate?: string;
  } = {};

  trackingAccountInfo: TrackingAccountInfo[] = [];

  http = inject(HttpClient);

  createClient(clientInfo: NewAccount) {
    return this.http.post(this.apiUrl + '/client/', clientInfo).pipe(
      switchMap((response: any) => {
        return this.createAccount(response.id, '');
      })
    );
  }

  // updateClient(clientInfo: NewAccount) {
  //   return this.http.put<NewAccount>(this.apiUrl + '/client', clientInfo);
  // }

  createAccount(clientId: string, approvalDate: any) {
    return this.http
      .post(this.apiUrl + '/account/', { clientId, approvalDate })
      .pipe(
        switchMap((response: any) => {
          return this.createTrackingAccount(response.id, 'AGUARDANDO_ANALISE');
        })
      );
  }

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
      address: {
        street: this.accountInfo.address!.street,
        building: this.accountInfo.address!.building,
        sub_building: this.accountInfo.address!.sub_building,
        city: this.accountInfo.address!.city,
        state: this.accountInfo.address!.state,
        country: this.accountInfo.address!.country,
        cep: this.accountInfo.address!.cep,
      },
      approvalDate: this.accountInfo.approvalDate!,
      requestDate: this.accountInfo.requestDate!,
    };

    return accountInfoObject;
  }

  createTrackingAccount(accountId: string, status: String) {
    return this.http
      .post(this.apiUrl + '/account-tracking/', { accountId, status })
      .pipe(tap(() => {}));
  }

  accessTrackingAccount() {
    return this.http.get(this.apiUrl + '/account-tracking/').pipe(
      tap((response) => {
        this.trackingAccountInfo = Object.values(response);
      })
    );
  }

  getTrackingAccountInfo(): TrackingAccountInfo[] {
    return this.trackingAccountInfo;
  }
}
