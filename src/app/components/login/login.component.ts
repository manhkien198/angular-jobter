import { ResponseLogin } from './../../model/login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './service/auth.service';
import { HttpServerService } from './service/http-server.service';
import { first, map } from 'rxjs';

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
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    if (this.service.userValue) {
      this.router.navigate(['/dashboard']);
    }
  }
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
      this.service
        .login(this.loginForm.value)
        .pipe(first())
        .subscribe({
          next: () => {
            // get return url from query parameters or default to home page
            const returnUrl =
              this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
            this.router.navigateByUrl(returnUrl);
          },
          error: (error) => {
            console.log('error :', error);
            this.toastr.error(error);
          },
        });
    }
  }

  public prevent(event: Event): void {
    event.preventDefault();
  }

  public backToLogin(): void {
    this.router.navigate(['/login']);
  }
}
