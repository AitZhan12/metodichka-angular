


import {environment} from '../../environments/environment';
import {AuthenticationService} from '../services/authentication.service';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private authService: AuthenticationService;

  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.checkAvailability()) {
      request = request.clone({
        setHeaders: {
          Authorization: environment.tokenPrefix + this.authService.getToken()
        }
      });
    }

    return next.handle(request);
  }
}
