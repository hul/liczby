import { TestBed } from '@angular/core/testing';

import { EquationTypeService } from './addition-type.service';

describe('AdditionTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquationTypeService = TestBed.get(EquationTypeService);
    expect(service).toBeTruthy();
  });
});
