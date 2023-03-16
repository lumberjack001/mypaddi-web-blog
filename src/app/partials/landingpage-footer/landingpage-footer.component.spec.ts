import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageFooterComponent } from './landingpage-footer.component';

describe('LandingpageFooterComponent', () => {
  let component: LandingpageFooterComponent;
  let fixture: ComponentFixture<LandingpageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpageFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
