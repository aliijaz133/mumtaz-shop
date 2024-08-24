import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDetailComponent } from './accounts-detail.component';

describe('AccountsDetailComponent', () => {
  let component: AccountsDetailComponent;
  let fixture: ComponentFixture<AccountsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccountsDetailComponent]
    });
    fixture = TestBed.createComponent(AccountsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
