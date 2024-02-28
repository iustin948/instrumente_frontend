import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/Auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.loggedIn()) 
    return true
  else 
  {
    authService.redirectUrl = state.url;
    router.navigate(['/login']);
    return false;
  }
  
};
