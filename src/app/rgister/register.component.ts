
import {UserService} from '../services/user.service';


import {Router} from '@angular/router';
import {User} from '../_models/User';
import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  user: User;
  loading = false;
  submitted = false;
  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.user = new User();
  }
  ngOnInit() {
  }
  onSubmit() {
    this.loading = true;
    this.userService.addUser(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        });
  }

}
