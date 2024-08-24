import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssetsComponent } from './update-assets.component';

describe('UpdateAssetsComponent', () => {
  let component: UpdateAssetsComponent;
  let fixture: ComponentFixture<UpdateAssetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpdateAssetsComponent]
    });
    fixture = TestBed.createComponent(UpdateAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
