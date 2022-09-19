import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FraudRoutingModule } from './fraud-routing.module';
import { FraudComponent } from './fraud.component';


@NgModule({
  declarations: [
    FraudComponent
  ],
  imports: [
    CommonModule,
    FraudRoutingModule
  ]
})
export class FraudModule { }
