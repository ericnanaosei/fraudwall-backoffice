import { NgModule } from '@angular/core';

import { InvestigationRoutingModule } from './investigation-routing.module';
import { InvestigationComponent } from './investigation.component';
import { SharedModule } from '../shared/shared.module';
import { ModalService } from '../modal/modal.service';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    InvestigationComponent
  ],
  providers: [ModalService],
  imports: [
    SharedModule,
    InvestigationRoutingModule,
    NgxPaginationModule
  ]
})
export class InvestigationModule { }
