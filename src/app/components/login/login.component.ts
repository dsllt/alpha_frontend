import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  applyForm = new FormGroup({
    cnpj: new FormControl(''),
    password: new FormControl(''),
  });

  submitLogin() {
    console.log('formValues', this.applyForm.value);
    alert('click');
  }

  cancelLogin() {
    console.log('formValues', this.applyForm.value);
    alert('click');
  }
}
