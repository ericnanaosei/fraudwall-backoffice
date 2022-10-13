import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportFile } from '../Dto/report.interface';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
})
export class ReportDetailComponent implements OnInit{
  reportDetail: ReportFile = {
    reportId: "",
    reporterNumber: "",
    suspectNumber: "",
    platForm: null,
    description: "",
    incidentDate: null,
  };

  reportFiles: string[];

  constructor(
    private readonly reportService: ReportService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const reportId = this.route.snapshot.paramMap.get('reportId');
    this.getReportById(reportId);
  }


  getReportById(reportId: string){
    this.reportService.getReportById(reportId).subscribe(data => {
      this.reportDetail = data;
      this.reportFiles = data.reportFile ? [...data.reportFile.fileLocation]: null;
    })
  }
}
