import { Component, inject } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountInfo } from '../../interfaces/account-info.ts';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  applyForm = new FormGroup({
    name: new FormControl(this.accountInfo.name, { nonNullable: true }),
    cnpj: new FormControl(this.accountInfo.cnpj, { nonNullable: true }),
    phone: new FormControl(this.accountInfo.phone),
    email: new FormControl(this.accountInfo.email, { nonNullable: true }),
    street: new FormControl(this.accountInfo.address!.street),
    building: new FormControl(this.accountInfo.address!.building),
    sub_building: new FormControl(this.accountInfo.address!.sub_building),
    city: new FormControl(this.accountInfo.address!.city),
    state: new FormControl(this.accountInfo.address!.state),
    country: new FormControl(this.accountInfo.address!.country),
    cep: new FormControl(this.accountInfo.address!.cep),
  });

  ngOnInit() {
    this.accountService.accessAccount().subscribe({
      error: (e) => console.log(e.error),
      complete: () => {
        const response: AccountInfo = this.accountService.getAccountInfo();
        this.accountInfo = response;
        this.applyForm = new FormGroup({
          name: new FormControl(this.accountInfo.name, { nonNullable: true }),
          cnpj: new FormControl(this.accountInfo.cnpj, { nonNullable: true }),
          phone: new FormControl(this.accountInfo.phone),
          email: new FormControl(this.accountInfo.email, { nonNullable: true }),
          street: new FormControl(this.accountInfo.address!.street),
          building: new FormControl(this.accountInfo.address!.building),
          sub_building: new FormControl(this.accountInfo.address!.sub_building),
          city: new FormControl(this.accountInfo.address!.city),
          state: new FormControl(this.accountInfo.address!.state),
          country: new FormControl(this.accountInfo.address!.country),
          cep: new FormControl(this.accountInfo.address!.cep),
        });
      },
    });
  }

  submitForm() {
    console.log(this.applyForm.value);
    alert('click');
  }
}
