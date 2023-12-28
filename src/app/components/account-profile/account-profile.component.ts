import { Component, inject } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountInfo } from '../../interfaces/account-info';

@Component({
  selector: 'app-account-profile',
  standalone: true,
  imports: [],
  templateUrl: './account-profile.component.html',
  styleUrl: './account-profile.component.css',
})
export class AccountProfileComponent {
  accountService = inject(AccountService);
  accountInfo: AccountInfo = {
    accountId: '',
    clientId: '',
    name: '',
    cnpj: '',
    phone: '',
    email: '',
    address: '',
    cep: '',
    approvalDate: '',
    requestDate: '',
  };

  ngOnInit() {
    this.accountService.accessAccount().subscribe({
      error: (e) => console.log(e.error),
      complete: () => {
        const response: AccountInfo = this.accountService.getAccountInfo();
        this.accountInfo = response;
      },
    });
  }
}
