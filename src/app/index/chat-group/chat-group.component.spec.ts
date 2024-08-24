import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupComponent } from './chat-group.component';

describe('ChatGroupComponent', () => {
  let component: ChatGroupComponent;
  let fixture: ComponentFixture<ChatGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChatGroupComponent]
    });
    fixture = TestBed.createComponent(ChatGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
