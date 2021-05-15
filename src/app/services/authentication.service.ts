import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import jwt_decode from 'jwt-decode';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor() {
  }

  public setToken(token: string) {
    localStorage.setItem(environment.tokenKey, token);
    console.log(this.getToken());
  }

  public getToken() {
    return localStorage.getItem(environment.tokenKey);
  }

  checkAvailability(): boolean {
    const auth = this.getToken();
    return !!auth;
  }

  public authorize(token) {
    this.setToken(token);
  }

  public getRole(): boolean {
    let payload: any;
     payload = jwt_decode(this.getToken());
     if (payload.scopes.authority === 'ROLE_ADMIN') {
       console.log(payload.scopes.authority);
       return true;
     }
  }

  public logout() {
    localStorage.removeItem(environment.tokenKey);
    console.log('TOKEN DELETED');
  }

}
