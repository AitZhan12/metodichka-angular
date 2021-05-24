
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

import {User} from '../_models/User';
import {UserService} from '../services/user.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  builder: FormBuilder;
  userService: UserService;
  authService: AuthenticationService;
  router: Router;

  constructor(builder: FormBuilder,
              router: Router,
              userService: UserService,
              authService: AuthenticationService) {
    this.builder = builder;
    this.userService = userService;
    this.authService = authService;
    this.router = router;
  }

  ngOnInit() {
    this.loginForm = this.builder.group({
      login: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  login() {
    const user: User = this.loginForm.getRawValue();
    this.userService.login(user).subscribe(perf => {
      this.authService.setToken(perf);
      this.router.navigateByUrl('/auth');
    });
  }
}
