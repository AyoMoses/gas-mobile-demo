import { TestBed } from '@angular/core/testing';

import { CylindersService } from './cylinders.service';

describe('CylindersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CylindersService = TestBed.get(CylindersService);
    expect(service).toBeTruthy();
  });
});
