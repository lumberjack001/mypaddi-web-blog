import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBannerComponent } from './chat-banner.component';

describe('ChatBannerComponent', () => {
  let component: ChatBannerComponent;
  let fixture: ComponentFixture<ChatBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
