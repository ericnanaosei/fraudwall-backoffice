import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseFileRoutingModule } from './case-file-routing.module';
import { CaseFileComponent } from './case-file.component';


@NgModule({
  declarations: [
    CaseFileComponent
  ],
  imports: [
    CommonModule,
    CaseFileRoutingModule
  ]
})
export class CaseFileModule { }
