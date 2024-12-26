import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../modules/auth/service/auth.service";

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if( authService.allowAccess){
    return true;
  }else {
    router.navigate(['login']);
    return false;
  }
};
