import { ListService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { IReport } from './IReport';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  providers: [ListService],
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {
  reportList: IReport[] =[];
  count: number = 0;

  constructor( 
    private readonly reportService: ReportService,
    public readonly list: ListService
    ) { 
      this.list.maxResultCount = 5;
    }

  ngOnInit(): void {
    
    const listReportStream = () => this.reportService.getListReport();
    this.list.hookToQuery(listReportStream).subscribe(response => {
      this.reportList = response.items as any;
      this.count = response.totalCount;
      console.log(this.count);
    })
  }

  // get report by id
  getReport(id: string){
    this.reportService.getReport(id).subscribe(report => {
      return report;
    });
  }
}
