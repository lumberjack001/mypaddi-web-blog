import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageCampaignComponent } from './landingpage-campaign.component';

describe('LandingpageCampaignComponent', () => {
  let component: LandingpageCampaignComponent;
  let fixture: ComponentFixture<LandingpageCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpageCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
