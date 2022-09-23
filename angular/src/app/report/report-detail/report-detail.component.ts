import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
})
export class ReportDetailComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('reportId'))
  }

}
