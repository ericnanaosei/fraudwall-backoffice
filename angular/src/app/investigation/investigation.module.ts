import { NgModule } from '@angular/core';

import { InvestigationRoutingModule } from './investigation-routing.module';
import { InvestigationComponent } from './investigation.component';
import { SharedModule } from '../shared/shared.module';
import { ModalService } from '../modal/modal.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [
    InvestigationComponent
  ],
  providers: [ModalService],
  imports: [
    SharedModule,
    InvestigationRoutingModule,
    NgxPaginationModule,
    SearchModule
  ]
})
export class InvestigationModule { }
