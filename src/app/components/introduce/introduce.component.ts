import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss'],
})
export class IntroduceComponent implements OnInit {
  constructor(private router: Router) {}
  public handleClickLogin(): void {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {}
}
