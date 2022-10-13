import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseFileRoutingModule } from './case-file-routing.module';
import { CaseFileComponent } from './case-file.component';
import { SearchModule } from '../search/search.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { CaseDetailComponent } from './case-detail/case-detail.component';


@NgModule({
  declarations: [
    CaseFileComponent,
    CaseDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CaseFileRoutingModule,
    SearchModule,
    NgxPaginationModule
  ]
})
export class CaseFileModule { }
