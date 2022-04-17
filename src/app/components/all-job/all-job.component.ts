import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, switchMap } from 'rxjs';
import { Job, Jobs, SearchValue } from '../../model/allJob';
import { AllJobService } from './all-job.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-job',
  templateUrl: './all-job.component.html',
  styleUrls: ['./all-job.component.scss'],
})
export class AllJobComponent implements OnInit {
  public searchForm = this.fb.group({
    search: '',
    status: 'all',
    type: 'all',
    sort: 'latest',
  });
  public allJob: Job[];
  public status: string[] = ['all', 'interview', 'declined', 'pending'];
  public type: string[] = [
    'all',
    'full-time',
    'part-time',
    'remote',
    'internship',
  ];
  public sort: string[] = ['latest', 'oldest', 'a-z', 'z-a'];

  public handleChange(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((changedValue: SearchValue) =>
          this.searchService.getJob(changedValue)
        )
      )
      .subscribe(
        (resp: Jobs) => {
          this.allJob = resp.jobs.map((job: Job) => ({
            ...job,
          }));
        },
        (err: any) => {
          this.toastr.error('Fail to search Job');
        }
      );
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private searchService: AllJobService,
    private toastr: ToastrService
  ) {}
  public clearFilter(): void {
    this.searchForm.reset();
  }
  public editJob(job: Job): void {
    this.searchService.editJob(job);
    this.router.navigate(['/addjob']);
  }
  public deleteJob(id: string) {
    this.searchService.deleteJob(id).subscribe(
      (resp) => {
        this.toastr.success('Delete Job Successfully');
      },
      (err) => {
        this.toastr.error('Failed to delete Job');
      }
    );
  }
  ngOnInit(): void {
    this.searchService.getJob(this.searchForm.value).subscribe(
      (resp: Jobs) => {
        this.allJob = resp.jobs;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
