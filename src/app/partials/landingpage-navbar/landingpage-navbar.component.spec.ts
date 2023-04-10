import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageNavbarComponent } from './landingpage-navbar.component';

describe('LandingpageNavbarComponent', () => {
  let component: LandingpageNavbarComponent;
  let fixture: ComponentFixture<LandingpageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpageNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
