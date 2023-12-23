import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { NewAccountFormComponent } from './components/new-account-form/new-account-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainHeaderComponent,
    MainBodyComponent,
    MainFooterComponent,
    NewAccountFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'unicred_frontend';
}
