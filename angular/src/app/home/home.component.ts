import { AuthService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { ICardInfo } from '../card/Interface/ICardInfo';
import { ReportService } from '../report/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ReportService]
})
export class HomeComponent implements OnInit{

  cardInfo: ICardInfo[];
  totalReport: number;

  // Home component constructor
  constructor(
    private oAuthService: OAuthService, 
    private authService: AuthService,
    private readonly reportService: ReportService,
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
    this.getTotalReport();
    this.getCardInfo();
  }

  // get card information method
  getCardInfo(){
      return this.cardInfo = [
      {title: "Report Cases", icon: "fa duotone fa-folder-open w-[90px]", total: this.totalReport, color: "bg-yellow-600"},
      {title: "Fraud Cases", icon: "fa solid fa-suitcase w-[90px]",total: 99, color: "bg-red-600"},
      {title:"Investigations", icon: "fa solid fa-vial w-[90px]", total: 100, color: "bg-green-600"},
      {title: "Archives", icon: "fa solid fa-database w-[90px]", total: 16, color: "bg-blue-600"}
    ]
  };
  // get total report
  getTotalReport(){
    this.reportService.getListReport().subscribe(total => {
      this.totalReport = total.length;
    });
  }
}