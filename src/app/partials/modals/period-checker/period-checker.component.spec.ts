import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodCheckerComponent } from './period-checker.component';

describe('PeriodCheckerComponent', () => {
  let component: PeriodCheckerComponent;
  let fixture: ComponentFixture<PeriodCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
