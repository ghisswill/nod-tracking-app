import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.user === undefined|| authService.user.userId === undefined || authService.user.userId === null) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
