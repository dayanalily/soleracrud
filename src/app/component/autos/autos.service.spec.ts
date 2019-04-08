import { TestBed } from '@angular/core/testing';

import { AutosService } from './autos.service';

describe('AutosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutosService = TestBed.get(AutosService);
    expect(service).toBeTruthy();
  });
});
