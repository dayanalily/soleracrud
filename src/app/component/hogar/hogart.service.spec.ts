import { TestBed } from '@angular/core/testing';

import { HogartService } from './hogart.service';

describe('HogartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HogartService = TestBed.get(HogartService);
    expect(service).toBeTruthy();
  });
});
