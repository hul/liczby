import { TestBed, inject } from '@angular/core/testing';

import { ContinueGameGuard } from './continue-game.guard';

describe('ContinueGameGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContinueGameGuard]
    });
  });

  it('should ...', inject([ContinueGameGuard], (guard: ContinueGameGuard) => {
    expect(guard).toBeTruthy();
  }));
});
