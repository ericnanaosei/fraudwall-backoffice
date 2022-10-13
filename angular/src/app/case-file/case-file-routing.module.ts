import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { CaseFileComponent } from './case-file.component';

const routes: Routes = [
  { path: '', component: CaseFileComponent },
  { path: 'detail/:caseId', component: CaseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseFileRoutingModule { }
