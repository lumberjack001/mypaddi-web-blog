import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagePatnerComponent } from './landingpage-patner.component';

describe('LandingpagePatnerComponent', () => {
  let component: LandingpagePatnerComponent;
  let fixture: ComponentFixture<LandingpagePatnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpagePatnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpagePatnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
