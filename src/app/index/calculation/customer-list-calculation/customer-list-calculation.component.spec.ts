import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListCalculationComponent } from './customer-list-calculation.component';

describe('CustomerListCalculationComponent', () => {
  let component: CustomerListCalculationComponent;
  let fixture: ComponentFixture<CustomerListCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomerListCalculationComponent]
    });
    fixture = TestBed.createComponent(CustomerListCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
