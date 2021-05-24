
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
