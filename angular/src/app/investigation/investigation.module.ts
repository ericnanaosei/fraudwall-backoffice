import { NgModule } from '@angular/core';

import { InvestigationRoutingModule } from './investigation-routing.module';
import { InvestigationComponent } from './investigation.component';
import { SharedModule } from '../shared/shared.module';
import { ModalService } from '../modal/modal.service';


@NgModule({
  declarations: [
    InvestigationComponent
  ],
  providers: [ModalService],
  imports: [
    SharedModule,
    InvestigationRoutingModule
  ]
})
export class InvestigationModule { }
