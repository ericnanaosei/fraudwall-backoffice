import { Component, OnInit } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { LogoComponent } from './logo/logo.component';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { FraudwallLayoutComponent } from './fraudwall-layout/fraudwall-layout.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-fraudwall-layout>
  `,
})
export class AppComponent  implements OnInit{
  constructor(private readonly replaceableComponent: ReplaceableComponentsService){}

  ngOnInit(): void {
      this.replaceableComponent.add({
        component: LogoComponent,
        key: eThemeBasicComponents.Logo,
      })
      this.replaceableComponent.add({
        component: FraudwallLayoutComponent,
        key: eThemeBasicComponents.ApplicationLayout
      })
      this.replaceableComponent.add({
        component: HomeComponent,
        key: eThemeBasicComponents.ApplicationLayout
      })
  }
}
