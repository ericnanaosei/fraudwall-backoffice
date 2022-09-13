import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
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

  getReport(id: string){
    this.reportService.getReport(id).subscribe(report => {
      return report;
    });
  }
}
