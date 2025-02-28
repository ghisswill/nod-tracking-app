import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/user.model';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router);
  let newObject = localStorage.getItem("userConnected") || '';
  let user: User = newObject != '' ? JSON.parse(newObject) : undefined;

  if (user?.id === undefined || user?.id === null ) {
    router.navigate(['login']);
    return false;
  }
  authService.isLoggedIn = true;
  return true;
};
