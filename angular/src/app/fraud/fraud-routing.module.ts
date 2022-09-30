import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FraudDetailComponent } from './fraud-detail/fraud-detail.component';
import { FraudComponent } from './fraud.component';

const routes: Routes = [
  { path: '', component: FraudComponent },
  { path: 'detail/:id/:phoneNumber', component: FraudDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FraudRoutingModule { }
