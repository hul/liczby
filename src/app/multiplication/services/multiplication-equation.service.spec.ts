import { TestBed } from '@angular/core/testing';

import { MultiplicationEquationService } from './multiplication-equation.service';

describe('MultiplicationEquationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiplicationEquationService = TestBed.get(MultiplicationEquationService);
    expect(service).toBeTruthy();
  });
});
