import { TestBed } from '@angular/core/testing';

import { MultiplicationGameService } from './multiplication-game.service';

describe('MultiplicationGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiplicationGameService = TestBed.get(MultiplicationGameService);
    expect(service).toBeTruthy();
  });
});
