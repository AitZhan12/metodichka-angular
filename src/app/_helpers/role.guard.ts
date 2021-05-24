
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true;
  }
}
