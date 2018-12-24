import { TestBed } from '@angular/core/testing';

import { SubtractionTypeService } from './subtraction-type.service';

describe('SubtractionTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubtractionTypeService = TestBed.get(SubtractionTypeService);
    expect(service).toBeTruthy();
  });
});
