import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Profile } from 'src/app/model';
import { HttpServerService } from '../login/service/http-server.service';
import { HttpProfileService } from './http-profile.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private info: Profile;
  public profileForm = this.fb.group({
    name: '',
    lastName: '',
    email: '',
    location: '',
  });

  constructor(
    private fb: FormBuilder,
    private loginService: HttpServerService,
    private httpProfile: HttpProfileService,
    private toastr: ToastrService
  ) {}
  public submit(): void {
    this.httpProfile.updateUser(this.profileForm.value).subscribe(
      (resp) => {
        this.toastr.success('Update user successfully');
      },
      (err) => {
        this.toastr.error('Failed to update user');
      }
    );
  }
  ngOnInit(): void {
    if (!this.loginService.infoUser) {
      return;
    } else {
      this.profileForm.patchValue({
        name: this.loginService.infoUser.name,
        lastName: this.loginService.infoUser.lastName,
        email: this.loginService.infoUser.email,
        location: this.loginService.infoUser.location,
      });
    }
  }
}
