import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    username: [''],
    password: [''],
  });
  constructor(private fb: FormBuilder, private service: AuthService) {}

  ngOnInit(): void {}
  public submit(): void {
    this.service.submit(this.loginForm.value);
  }
}
