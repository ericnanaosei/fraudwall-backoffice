import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FraudNumberDto, FraudService } from '@proxy/fraud';
import { ReportDto } from 'src/app/report/Dto/ReportDto';
import { ReportService } from 'src/app/report/report.service';

@Component({
  selector: 'app-fraud-detail',
  templateUrl: './fraud-detail.component.html'
})
export class FraudDetailComponent implements OnInit {
  totalReport: number = 0;
  report: ReportDto[] = [{
    reportId: "",
    reporterNumber: "",
    suspectNumber: "",
    platForm: null,
    description: "",
    incidentDate: null,
  }]
  fraudNumber: FraudNumberDto = {
    phoneNumber: "",
    reportCount: this.totalReport,
    rating: null,
    riskLevel: null
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly reportService: ReportService,
    private readonly fraudService: FraudService
  ) { }

  ngOnInit(): void {
    var phoneNumber = this.route.snapshot.paramMap.get("phoneNumber");
    var fraudId = this.route.snapshot.paramMap.get("id");
    this.getTotalReport(phoneNumber);
    console.log(this.getFraudNumberDetail(fraudId))
  }

  getTotalReport(phoneNumber: string){
    this.reportService.getTotalReportForSuspect("0203162270").subscribe(report => {
      this.totalReport = report.length;
    })
  };

  getFraudNumberDetail(fraudId: string){
    this.fraudService.get(fraudId).subscribe(fraudnumber =>{
      this.fraudNumber = fraudnumber;
    });
  }
}
