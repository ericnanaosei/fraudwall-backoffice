import { Component, OnInit } from '@angular/core';
import { ReportDto } from './Dto/ReportDto';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {
  reportList: ReportDto[];
  page: number = 1;
  totalCount: number = 0;

  constructor( 
    private readonly reportService: ReportService,
    ) {

     }

  ngOnInit(){
    this.reportService.getReportList().subscribe(report => {
      this.reportList = report;
      this.totalCount = report.length;
    })
  }

  // get report by id
  getReport(id: string){
    this.reportService.getReport(id).subscribe(report => {
      return report;
    });
  }
  // on page change event
  pageChangeEvent(event: number){
    this.page = event;
    this.reportService.getReportList();
}
}
