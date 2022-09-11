import { Component, OnInit } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { LogoComponent } from './logo/logo.component';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { FraudwallLayoutComponent } from './fraudwall-layout/fraudwall-layout.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
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
  }
}
