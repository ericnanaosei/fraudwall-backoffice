import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportDto } from '../Dto/ReportDto';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
})
export class ReportDetailComponent implements OnInit{
  reportDetail: ReportDto = {
    reportId: "",
    reporterNumber: "",
    suspectNumber: "",
    platForm: null,
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


  async getReportDetail(reportId: string){
    this.reportService.getReport(reportId).subscribe(report =>{
      this.reportDetail = report;
    });
  }
}
