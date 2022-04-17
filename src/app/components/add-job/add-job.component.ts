import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllJobService } from '../all-job/all-job.service';
import { AddJobService } from './add-job.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss'],
})
export class AddJobComponent implements OnInit {
  public addForm = this.fb.group({
    position: [, Validators.required],
    company: [, Validators.required],
    location: [, Validators.required],
    status: [, Validators.required],
    type: [, Validators.required],
  });
  public isEdit: boolean = false;
  constructor(
    private jobService: AllJobService,
    private fb: FormBuilder,
    private addHttp: AddJobService,
    private toastr: ToastrService
  ) {}
  public status: string[] = ['all', 'interview', 'declined', 'pending'];

  public type: string[] = [
    'all',
    'full-time',
    'part-time',
    'remote',
    'internship',
  ];
  public clearFilter(): void {
    this.addForm.reset();
  }
  public submit(): void {
    if (this.addForm.invalid) return;
    if (!this.isEdit) {
      this.addHttp
        .editJob(this.addForm.value, this.jobService.jobItem._id)
        .subscribe(
          (resp) => {
            this.toastr.success('Edit Job Successfully');
          },
          (err) => {
            this.toastr.error('Failed to edit Job');
          }
        );
    } else {
      this.addHttp.addJob(this.addForm.value).subscribe(
        (resp) => {
          this.toastr.success('Add Job Successfully');
        },
        (err) => {
          this.toastr.error('Failed to add Job');
        }
      );
    }
  }
  ngOnInit(): void {
    if (!this.jobService.jobItem) {
      this.addForm.reset();
      this.isEdit = true;
    } else {
      this.isEdit = false;
      this.addForm.patchValue({
        position: this.jobService.jobItem.position,
        company: this.jobService.jobItem.company,
        location: this.jobService.jobItem.jobLocation,
        status: this.jobService.jobItem.status,
        type: this.jobService.jobItem.jobType,
      });
    }
  }
}
