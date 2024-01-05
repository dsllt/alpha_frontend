import { Component, inject } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { TrackingAccountInfo } from '../../interfaces/tracking-account-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-request.component.html',
  styleUrl: './account-request.component.css',
})
export class AccountRequestComponent {
  accountService = inject(AccountService);
  trackingAccountInfo: TrackingAccountInfo[] = [];

  formatDate(date: any) {
    const newDate = new Date(date);
    var dd = '';
    var mm = '';
    const yyyy = newDate.getFullYear();

    if (newDate.getDate() < 10) {
      dd = '0' + newDate.getDate();
    } else {
      dd = newDate.getDate().toString();
    }
    if (newDate.getMonth() + 1 < 10) {
      mm = '0' + (newDate.getMonth() + 1);
    } else {
      mm = (newDate.getMonth() + 1).toString();
    }

    return dd + '/' + mm + '/' + yyyy;
  }

  formatStatus(status: string) {
    switch (status) {
      case 'AGUARDANDO_ANALISE':
        return 'Aguardando análise';
      case 'EM_ANALISE':
        return 'Em análise';
      case 'APROVADA':
        return 'Aprovada';
      case 'PENDENTE':
        return 'Pendente';
      case 'REPROVADA':
        return 'Reprovada';
      default:
        return '';
    }
  }

  validateStatus(status: number) {
    if (this.trackingAccountInfo.length >= status) {
      return true;
    }
    return false;
  }

  validateStatusIcon(status: number) {
    if (this.trackingAccountInfo.length > status) {
      return true;
    }
    return false;
  }

  ngOnInit() {
    this.accountService.accessTrackingAccount().subscribe({
      error: (e) => console.log(e.error),
      complete: () => {
        const response = this.accountService.getTrackingAccountInfo();
        response.map((status) => {
          const formattedStatus = {
            accountId: status.accountId,
            status: this.formatStatus(status.status),
            date: this.formatDate(status.date),
          };
          this.trackingAccountInfo.push(formattedStatus);
        });
      },
    });
  }
}
