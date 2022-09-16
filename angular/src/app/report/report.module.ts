import { NgModule } from '@angular/core';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalService } from '../modal/modal.service';
import { ModalComponent } from '../modal/modal.component';


@NgModule({
  declarations: [
    ReportComponent,
    ModalComponent
  ],
  providers: [ModalService],
  imports: [
    NgxPaginationModule,
    ReportRoutingModule,
    SharedModule
  ]
})
export class ReportModule { }
