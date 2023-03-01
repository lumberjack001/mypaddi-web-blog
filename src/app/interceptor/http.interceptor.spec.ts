import { TestBed } from '@angular/core/testing';

import { HttpConfigInterceptor } from './http.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpConfigInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpConfigInterceptor = TestBed.inject(HttpConfigInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
