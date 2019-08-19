import { TestBed } from '@angular/core/testing';

import { ImpressorasService } from './impressoras.service';

describe('ImpressorasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImpressorasService = TestBed.get(ImpressorasService);
    expect(service).toBeTruthy();
  });
});
