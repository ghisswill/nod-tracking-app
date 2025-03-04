import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/user.model';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router);
  const user:User = authService.user?.id !== undefined ? authService.user : JSON.parse(localStorage.getItem('userConnected') || '');

  if (user === undefined|| user.id === undefined || user.id === null ) {
    router.navigate(['login']);
    return false;
  }
  authService.isLoggedIn = true;
  return true;
};
