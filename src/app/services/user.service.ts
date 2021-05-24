
import {environment} from '../../environments/environment';
import {User} from '../_models/User';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class UserService {
  loginUrl = environment.apiUrl + '/login';
  // loginRootUrl = environment.apiRootUrl + '/login';
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
