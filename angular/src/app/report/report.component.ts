import { ListService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  providers: [ListService],
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {

  constructor( private readonly reportService: ReportService) { }
  report$: [];

  ngOnInit(): void {
    this.reportService.getListReport().subscribe( reports => {
      this.report$ = reports;
    });
  }

  // get report by id
  getReport(id: string){
    this.reportService.getReport(id).subscribe(report => {
      return report;
    });
  }
}
