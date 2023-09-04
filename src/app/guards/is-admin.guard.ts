import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { map } from 'rxjs';

export const isAdminGuard= (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{

  let token = localStorage.getItem('token');

  let role = JSON.parse(token!).user.role;

  const router= inject(Router)
  return inject(AuthService).isAdmin()
  .pipe(
    map((isLoggedIn) => {
      isLoggedIn? true: router.navigate(['login'])
    })
  )
};
