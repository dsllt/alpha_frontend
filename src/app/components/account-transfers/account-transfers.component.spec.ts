import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransfersComponent } from './account-transfers.component';

describe('AccountTransfersComponent', () => {
  let component: AccountTransfersComponent;
  let fixture: ComponentFixture<AccountTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountTransfersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
