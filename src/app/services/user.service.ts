import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {User} from '../_models/User';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class UserService {
  loginUrl = environment.apiUrl + '/login';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  addUser(user: User) {
    return this.http.post<User>(`${environment.apiUrl}/api/users`, user);
  }
  getById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
  public login(user: User) {
    return this.http.post(this.loginUrl, user, {responseType: 'text'});
  }
}
