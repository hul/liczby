import { TestBed } from '@angular/core/testing';

import { AdditionTypeService } from './addition-type.service';

describe('AdditionTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdditionTypeService = TestBed.get(AdditionTypeService);
    expect(service).toBeTruthy();
  });
});
