import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportDto } from '../Dto/ReportDto';
import { ReportService } from '../report.service';
import { PlatFormEnum } from '../types/Platform.enum';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
})
export class ReportDetailComponent implements OnInit,OnChanges{
  reportDetail: ReportDto = {
    reportId: "",
    reporterNumber: "",
    suspectNumber: "",
    platForm: PlatFormEnum.PHONE,
    description: "",
    incidentDate: null,
  };

  constructor(
    private readonly reportService: ReportService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const reportId = this.route.snapshot.paramMap.get('reportId');
    this.getReportDetail(reportId);
  }

  ngOnChanges(_changes: SimpleChanges): void {
    console.log("something changed")
  }

  async getReportDetail(reportId: string){
    this.reportService.getReport(reportId).subscribe(report =>{
      this.reportDetail = report;
    });
  }
}
