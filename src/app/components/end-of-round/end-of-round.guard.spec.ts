import { TestBed, inject } from '@angular/core/testing';

import { EndOfRoundGuard } from './end-of-round.guard';

describe('EndOfRoundGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndOfRoundGuard]
    });
  });

  it('should ...', inject([EndOfRoundGuard], (guard: EndOfRoundGuard) => {
    expect(guard).toBeTruthy();
  }));
});
