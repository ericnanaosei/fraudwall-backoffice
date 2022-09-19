
import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { ReportInvestigationService, InvestigationReportDto } from '@proxy/investigation';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  providers: [ListService],
})
export class InvestigationComponent implements OnInit {
  investigations = { items: [], totalCount: 0 } as PagedResultDto<InvestigationReportDto>;
  page: number = 0;

  constructor(public readonly list: ListService, private reportInvestigation: ReportInvestigationService) {}

  ngOnInit() {
    this.getInvestigation();
  }
  
  // get Investigation
  getInvestigation():any{
    const investigationStreamCreator = (query) => this.reportInvestigation.getList(query);

    return this.list.hookToQuery(investigationStreamCreator).subscribe((response) => {
      this.investigations = response;
    });
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.investigations = this.getInvestigation();
  }
}
