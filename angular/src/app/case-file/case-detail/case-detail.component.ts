import { PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseFileService } from '../case-file.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
})
export class CaseDetailComponent implements OnInit {
  caseFile: any;
  searchTextEntered = "";
  page: number = 0;
  reports = { items: [], totalCount: 0 } as PagedResultDto<any>;

  constructor(
    private readonly caseFileService: CaseFileService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    const caseId = this.route.snapshot.paramMap.get('caseId');
    this.getCaseFileById(caseId);
  }

  getCaseFileById(caseId: string){
    this.caseFileService.getCaseFileById(caseId).subscribe(result=>{
      this.caseFile = result;
      this.reports.items = result.reports;
      this.reports.totalCount = result.reports.length;
    })
  }


  pageChangeEvent(event: number){
    this.page = event;
    this.caseFileService.getCaseFiles().subscribe(results =>{
      this.reports.items = results.reports;
    });
  }
  // search text custom event called
  onSearchedText(searchedText:string){
    this.searchTextEntered = searchedText;
  }

  gotoReportDetail(reportId: string){
    this.router.navigate([`report/detail/${reportId}`])
  }
}
