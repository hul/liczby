import { TestBed } from '@angular/core/testing';

import { DivisionTypeService } from './division-type.service';

describe('DivisionTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivisionTypeService = TestBed.get(DivisionTypeService);
    expect(service).toBeTruthy();
  });
});
