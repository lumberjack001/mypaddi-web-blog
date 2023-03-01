import { TestBed } from '@angular/core/testing';

import { UnauthBlogService } from './unauth-blog.service';

describe('UnauthBlogService', () => {
  let service: UnauthBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnauthBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
