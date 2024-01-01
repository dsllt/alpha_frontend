import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { NewAccount } from '../../interfaces/new-account';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-account-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './new-account-form.component.html',
  styleUrl: './new-account-form.component.css',
})
export class NewAccountFormComponent {
  applyForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    cnpj: new FormControl('', { nonNullable: true }),
    phone: new FormControl(''),
    email: new FormControl('', { nonNullable: true }),
    street: new FormControl(''),
    building: new FormControl(''),
    sub_building: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    cep: new FormControl(''),
    password: new FormControl('', { nonNullable: true }),
  });

  constructor(private accountService: AccountService, public router: Router) {}

  submitForm() {
    const clientInfo: NewAccount = {
      name: this.applyForm.value.name!,
      cnpj: this.applyForm.value.cnpj!.toString(),
      phone: this.applyForm.value.phone!,
      email: this.applyForm.value.email!,
      address: {
        street: this.applyForm.value.street!,
        building: this.applyForm.value.building!,
        sub_building: this.applyForm.value.sub_building!,
        city: this.applyForm.value.city!,
        state: this.applyForm.value.state!,
        country: this.applyForm.value.country!,
        cep: this.applyForm.value.cep!.toString(),
      },
      password: this.applyForm.value.password!,
    };

    this.accountService.createClient(clientInfo).subscribe({
      error: (e) => {
        console.log(e.error);
      },
      complete: () => {
        this.router.navigate(['/login']);
      },
    });
  }

  cancelForm() {
    console.log('formValues', this.applyForm);
    alert('click');
  }
}
