import { TestBed, async, inject } from '@angular/core/testing';

import { UniversalguardGuard } from './universalguard.guard';

describe('UniversalguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversalguardGuard]
    });
  });

  it('should ...', inject([UniversalguardGuard], (guard: UniversalguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
