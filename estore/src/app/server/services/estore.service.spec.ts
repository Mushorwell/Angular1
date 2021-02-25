import { TestBed } from '@angular/core/testing';

import { EstoreService } from './estore.service';

describe('EstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstoreService = TestBed.get(EstoreService);
    expect(service).toBeTruthy();
  });
});
