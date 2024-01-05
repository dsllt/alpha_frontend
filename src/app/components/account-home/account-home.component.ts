import { Component, inject } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountInfo } from '../../interfaces/account-info.ts';

@Component({
  selector: 'app-account-home',
  standalone: true,
  imports: [],
  templateUrl: './account-home.component.html',
  styleUrl: './account-home.component.css',
})
export class AccountHomeComponent {
  accountService = inject(AccountService);
  accountInfo: AccountInfo = {
    accountId: '',
    clientId: '',
    name: '',
    cnpj: '',
    phone: '',
    email: '',
    address: {
      street: '',
      building: '',
      sub_building: '',
      city: '',
      state: '',
      country: '',
      cep: '',
    },
    approvalDate: '',
    requestDate: '',
  };

  ngOnInit() {
    this.accountService.accessAccount().subscribe({
      error: (e) => console.log(e.error),
      complete: () => {
        const response: AccountInfo = this.accountService.getAccountInfo();
        this.accountInfo = response;
        console.log('info', this.accountInfo);
      },
    });
  }
}
