import { NgModule } from '@angular/core';

import { InvestigationRoutingModule } from './investigation-routing.module';
import { InvestigationComponent } from './investigation.component';
import { SharedModule } from '../shared/shared.module';
import { InvestigationService } from './investigation.service';


@NgModule({
  declarations: [
    InvestigationComponent
  ],
  providers: [InvestigationService],
  imports: [
    SharedModule,
    InvestigationRoutingModule
  ]
})
export class InvestigationModule { }
