import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Observable} from 'rxjs/internal/Observable';
import {throwError} from 'rxjs/internal/observable/throwError';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.router.navigate(['/']);
      } else if (err.status === 403) {
        this.router.navigate(['/home/errors/403']);
      } else if (err.status === 500) {
        this.router.navigate(['/home/errors/500']);
      }


      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
