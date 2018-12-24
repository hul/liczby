import { TestBed } from '@angular/core/testing';

import { AdditionGameService } from './addition-game.service';

describe('AdditionGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdditionGameService = TestBed.get(AdditionGameService);
    expect(service).toBeTruthy();
  });
});
