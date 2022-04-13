import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from 'src/app/model/sidebar';
import { AuthService } from '../login/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  active = '1';
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  constructor(private authService: AuthService) {}
  public links: Link[] = [
    { icon: 'fas fa-chart-bar', title: 'Stats', link: '/home' },
    {
      icon: 'fa-thin fa-chart-mixed',
      title: 'All Job',
      link: '/alljob',
    },
    { icon: 'fa-thin fa-file-plus', title: 'Add Job', link: '/addjob' },
    { icon: 'fa-thin fa-file-user', title: 'Profile', link: '/profile' },
  ];
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }
}
