import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authService: AuthenticationService;

  constructor(private router: Router,
              authService: AuthenticationService) {
    this.authService = authService;
  }

  canActivate = () => {
    if (this.authService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
