import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { ICardInfo } from '../card/Interface/ICardInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public cardInfo: ICardInfo[];
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(private oAuthService: OAuthService, private authService: AuthService) {}

  login() {
    this.authService.navigateToLogin();
  }

  getCardInfo(){
      return this.cardInfo = [
      {title: "Report Cases", icon: "fa duotone fa-folder-open w-[90px]", total: 23, color: "bg-yellow-600"},
      {title: "Fraud Cases", icon: "fa solid fa-suitcase w-[90px]",total: 99, color: "bg-red-600"},
      {title:"Investigations", icon: "fa solid fa-vial w-[90px]", total: 100, color: "bg-green-600"},
      {title: "Archives", icon: "fa solid fa-database w-[90px]", total: 16, color: "bg-blue-600"}
    ]
  }
}