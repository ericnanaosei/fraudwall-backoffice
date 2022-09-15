import { NgModule } from '@angular/core';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    NgxPaginationModule,
    ReportRoutingModule,
    SharedModule
  ]
})
export class ReportModule { }
