import { TestBed } from '@angular/core/testing';

import { PostResolveService } from './post-resolve.service';

describe('PostResolveService', () => {
  let service: PostResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
