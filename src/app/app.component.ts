import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './components/login/service/auth.service';
import { Link } from './model/sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-jobter';
  public show = true;
  public username = '';
  public links: Link[] = [
    { icon: 'fa fa-home', title: 'Stats', link: '/dashboard' },
    {
      icon: 'fa fa-book',
      title: 'All Job',
      link: '/alljob',
    },
    { icon: 'fa fa-file-o', title: 'Add Job', link: '/addjob' },
    { icon: 'fa fa-address-book-o', title: 'Profile', link: '/profile' },
  ];

  constructor(public authService: AuthService, private router: Router) {}
  public handleLogout(): void {
    localStorage.removeItem('Auth_token');
    localStorage.removeItem('username');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';
  }
}
