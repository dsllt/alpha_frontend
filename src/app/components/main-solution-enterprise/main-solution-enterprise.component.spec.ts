import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSolutionEnterpriseComponent } from './main-solution-enterprise.component';

describe('MainSolutionEnterpriseComponent', () => {
  let component: MainSolutionEnterpriseComponent;
  let fixture: ComponentFixture<MainSolutionEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSolutionEnterpriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSolutionEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
