import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationFeeCalcualtionComponent } from './education-fee-calcualtion.component';

describe('EducationFeeCalcualtionComponent', () => {
  let component: EducationFeeCalcualtionComponent;
  let fixture: ComponentFixture<EducationFeeCalcualtionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EducationFeeCalcualtionComponent]
    });
    fixture = TestBed.createComponent(EducationFeeCalcualtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
