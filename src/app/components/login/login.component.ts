import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValue } from 'src/app/model/login';
import { AuthService } from './service/auth.service';
import { HttpServerService } from './service/http-server.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  public submitted = false;

  public isRegister = false;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private http: HttpServerService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  get getform() {
    return this.loginForm.controls;
  }
  ngOnInit(): void {
    this.service.logout();
  }
  public submit(): void {
    this.submitted = true;

    if (this.loginForm.value.name) {
      this.http.register(this.loginForm.value).subscribe(
        (data) => {
          this.isRegister = false;
          this.loginForm.reset();
          this.router.navigate(['/login']);
          this.toastr.success('Register Successfully');
        },
        (error) => {
          this.toastr.error(error.error.msg);
        }
      );
    } else {
      this.http.login(this.loginForm.value).subscribe(
        (data) => {
          this.service.submit(this.loginForm.value);
          localStorage.setItem('Auth_token', data.user.token);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', data.user.name);
          this.http.getInfo(data.user);
          this.router.navigate(['/dashboard']);
          this.toastr.success('Login Successfully');
        },

        (error) => {
          this.toastr.error('Failed to Login');
          this.router.navigate(['/login']);
        }
      );
    }
  }
  public prevent(event: Event): void {
    event.preventDefault();
  }

  public backToLogin(): void {
    this.router.navigate(['/login']);
  }
}
