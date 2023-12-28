import { Component, inject } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { TrackingAccountInfo } from '../../interfaces/tracking-account-info';

@Component({
  selector: 'app-account-request',
  standalone: true,
  imports: [],
  templateUrl: './account-request.component.html',
  styleUrl: './account-request.component.css',
})
export class AccountRequestComponent {
  accountService = inject(AccountService);
  trackingAccountInfo: TrackingAccountInfo = {
    accountId: '',
    status: '',
    updateDate: '',
  };

  ngOnInit() {
    this.accountService.accessTrackingAccount().subscribe({
      error: (e) => console.log(e.error),
      complete: () => {
        const response = this.accountService.getTrackingAccountInfo();
        const date = new Date(response.updateDate);
        var dd = '';
        var mm = '';
        const yyyy = date.getFullYear();

        if (date.getDate() < 10) {
          dd = '0' + date.getDate();
        } else {
          dd = date.getDate().toString();
        }
        if (date.getMonth() + 1 < 10) {
          mm = '0' + date.getMonth() + 1;
        } else {
          mm = (date.getMonth() + 1).toString();
        }

        const dateLocale = dd + '/' + mm + '/' + yyyy;

        this.trackingAccountInfo = response;
        this.trackingAccountInfo.updateDate = dateLocale;
      },
    });
  }
}
