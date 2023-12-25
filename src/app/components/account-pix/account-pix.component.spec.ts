import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPixComponent } from './account-pix.component';

describe('AccountPixComponent', () => {
  let component: AccountPixComponent;
  let fixture: ComponentFixture<AccountPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountPixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
