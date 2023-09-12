import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { newUserGuard } from './new-user.guard';

describe('newUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => newUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
