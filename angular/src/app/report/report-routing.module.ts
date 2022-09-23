import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ReportComponent } from './report.component';

const routes: Routes = [
  { path: '', component: ReportComponent },
  { path: 'detail/:reportId', component: ReportDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
