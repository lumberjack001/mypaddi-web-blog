import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagePartnerComponent } from './landingpage-partner.component';

describe('LandingpagePartnerComponent', () => {
  let component: LandingpagePartnerComponent;
  let fixture: ComponentFixture<LandingpagePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpagePartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpagePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
