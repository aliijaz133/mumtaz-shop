import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCaculationComponent } from './other-caculation.component';

describe('OtherCaculationComponent', () => {
  let component: OtherCaculationComponent;
  let fixture: ComponentFixture<OtherCaculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OtherCaculationComponent]
    });
    fixture = TestBed.createComponent(OtherCaculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
