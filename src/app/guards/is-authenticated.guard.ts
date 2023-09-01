import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, createUrlTreeFromSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const isAuthenticatedGuard = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let token = localStorage.getItem('token');

  let role = JSON.parse(token!).user.role;

  const router= inject(Router)
  return inject(AuthService).isAuthentiated()
  .pipe(
    map((isLoggedIn) => {
      isLoggedIn? true: router.navigate(['login'])
    })
  )
};
