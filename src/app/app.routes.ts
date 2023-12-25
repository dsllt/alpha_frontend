import { Routes } from '@angular/router';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { NewAccountFormComponent } from './components/new-account-form/new-account-form.component';
import { LoginComponent } from './components/login/login.component';
import { AccountHomeComponent } from './components/account-home/account-home.component';
import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';
import { AccountTransfersComponent } from './components/account-transfers/account-transfers.component';
import { AccountPixComponent } from './components/account-pix/account-pix.component';
import { AccountRequestComponent } from './components/account-request/account-request.component';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainBodyComponent,
  },
  {
    path: 'solucoes',
    component: MainBodyComponent,
  },
  {
    path: 'nova-conta',
    component: NewAccountFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'auth/home',
    component: AccountHomeComponent,
  },
  {
    path: 'auth/conta-corrente',
    component: AccountTransactionsComponent,
  },
  {
    path: 'auth/transferencias',
    component: AccountTransfersComponent,
  },
  {
    path: 'auth/pix',
    component: AccountPixComponent,
  },
  {
    path: 'auth/solicitacao',
    component: AccountRequestComponent,
  },
  {
    path: 'auth/perfil',
    component: AccountProfileComponent,
  },
];
