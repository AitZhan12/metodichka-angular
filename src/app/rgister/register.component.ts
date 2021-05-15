import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../_models/User';

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
