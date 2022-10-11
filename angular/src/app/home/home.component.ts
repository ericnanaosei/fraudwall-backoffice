import { AuthService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { FraudService } from '../fraud/fraud.service';
import { ReportInvestigationService } from '@proxy/investigation';
import { OAuthService } from 'angular-oauth2-oidc';
import { ICardInfo } from '../card/Interface/ICardInfo';
import { ReportService } from '../report/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ReportService, ReportInvestigationService]
})
export class HomeComponent implements OnInit{

  cardInfo: ICardInfo[];
  totalReport: number;
  totalInvestigation: number;
  totalFraudCases: number;

  // Home component constructor
  constructor(
    private oAuthService: OAuthService, 
    private authService: AuthService,
    private readonly reportService: ReportService,
    private readonly reportInvestigationService: ReportInvestigationService,
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
    this.getTotalInvestigation();
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
        title:"Investigations", 
        icon: "fa solid fa-vial w-[90px]", 
        total: this.totalInvestigation, 
        color: "bg-green-600",
        url: "investigation"
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
  getTotalInvestigation(){
    this.reportInvestigationService.getList({ maxResultCount: 1, skipCount: 0 }).subscribe(investigation =>{
      this.totalInvestigation = investigation.totalCount;
    })
  };
}