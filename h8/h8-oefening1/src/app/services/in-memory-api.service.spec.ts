import { TestBed } from '@angular/core/testing';

import { InMemoryApiService } from './in-memory-api.service';

describe('InMemoryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryApiService = TestBed.get(InMemoryApiService);
    expect(service).toBeTruthy();
  });
});
