import { NgModule } from '@angular/core';
import { CardModule } from '../card/card.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, CardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
