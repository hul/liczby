import { TestBed } from '@angular/core/testing';

import { SubtractionGameService } from './subtraction-game.service';

describe('SubtractionGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubtractionGameService = TestBed.get(SubtractionGameService);
    expect(service).toBeTruthy();
  });
});
