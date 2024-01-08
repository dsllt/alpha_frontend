import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-solution-enterprise',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './main-solution-enterprise.component.html',
  styleUrl: './main-solution-enterprise.component.css',
})
export class MainSolutionEnterpriseComponent {}
