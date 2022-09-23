import { NgModule } from '@angular/core';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchModule } from '../search/search.module';
import { ReportDetailComponent } from './report-detail/report-detail.component';



@NgModule({
  declarations: [
    ReportComponent,
    ReportDetailComponent
  ],
  imports: [
    NgxPaginationModule,
    ReportRoutingModule,
    SharedModule,
    SearchModule
  ]
})
export class ReportModule { }
