import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    SharedModule,
    HomeModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
