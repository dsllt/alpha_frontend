import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSolutionUserComponent } from './main-solution-user.component';

describe('MainSolutionUserComponent', () => {
  let component: MainSolutionUserComponent;
  let fixture: ComponentFixture<MainSolutionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSolutionUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSolutionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
