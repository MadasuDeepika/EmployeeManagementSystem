import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, createUrlTreeFromSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const isAuthenticatedGuard = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router= inject(Router)
  return inject(AuthService).isAuthentiated()
  .pipe(
    map((isLoggedIn) => {
      isLoggedIn? true: router.navigate(['login'])
    })
  )
};
