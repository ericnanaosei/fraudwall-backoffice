import { AuthService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { FraudService } from '../fraud/fraud.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { ICardInfo } from '../card/Interface/ICardInfo';
import { ReportService } from '../report/report.service';
import { CaseFileService } from '../case-file/case-file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ReportService]
})
export class HomeComponent implements OnInit{

  cardInfo: ICardInfo[];
  totalReport: number;
  totalCaseFiles: number;
  totalFraudCases: number;

  // Home component constructor
  constructor(
    private oAuthService: OAuthService, 
    private authService: AuthService,
    private readonly reportService: ReportService,
    private readonly caseFileService: CaseFileService,
    private readonly fraudService: FraudService,
    ) {}
  
  // check if user has login
  get hasLoggedIn(): boolean {
      return this.oAuthService.hasValidAccessToken();
    }

  // invoke user login service
  login() {
    this.authService.navigateToLogin();
  }
  // Hook
  ngOnInit(): void {
    this.getTotalReportCount();
    this.getTotalRecordForCaseFiles();
    this.getTotalFraudNumbersCount();
    this.getCardInfo();
  }

  // get card information method
  getCardInfo(){
      return this.cardInfo = [
      {
        title: "Report Cases", 
        icon: "fa duotone fa-folder-open w-[90px]", 
        total: this.totalReport, 
        color: "bg-yellow-600", 
        url:"report"
      },
      {
        title: "Fraud Cases", 
        icon: "fa solid fa-suitcase w-[90px]",
        total: this.totalFraudCases, 
        color: "bg-red-600",
        url: 'fraud'
      },
      {
        title:"Case Files", 
        icon: "fa solid fa-file-export w-[90px]", 
        total: this.totalCaseFiles, 
        color: "bg-gray-800",
        url: "case-file"
      },
      {
        title: "Archives", 
        icon: "fa solid fa-database w-[90px]", 
        total: 0, 
        color: "bg-blue-600",
        url: "archive"
      }
    ]
  };
  // get total report
  getTotalReportCount(){
    this.reportService.getTotalReportCount().subscribe(report => {
      this.totalReport = report;
    });
  };

  getTotalFraudNumbersCount(){
    this.fraudService.getTotalFraudNumbersCount().subscribe(fraud =>{
      this.totalFraudCases = fraud;
    })
  }

  // get total investigation
  getTotalRecordForCaseFiles(){
    this.caseFileService.getCaseFileTotalRecords().subscribe((data)=>{
      this.totalCaseFiles = data;
    })
  };
}