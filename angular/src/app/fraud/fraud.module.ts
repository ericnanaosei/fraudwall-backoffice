import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FraudRoutingModule } from './fraud-routing.module';
import { FraudComponent } from './fraud.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FraudComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FraudRoutingModule,
    NgxPaginationModule
  ]
})
export class FraudModule { }
