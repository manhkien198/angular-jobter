import { Component, OnInit } from '@angular/core';
import { DefaultStats } from 'src/app/model';
import { ChartValue } from '../../model/stats';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  public jobs: DefaultStats;
  public result: ChartValue[] = [];
  constructor(private httpStat: StatsService) {}

  ngOnInit(): void {
    this.httpStat.getJob().subscribe(
      (job) => {
        this.jobs = job.defaultStats;
        job.monthlyApplications.map((item) =>
          this.result.push({
            name: item.date,
            value: item.count,
          })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
