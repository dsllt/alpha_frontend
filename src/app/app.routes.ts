import { Routes } from '@angular/router';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { NewAccountFormComponent } from './components/new-account-form/new-account-form.component';

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
];
