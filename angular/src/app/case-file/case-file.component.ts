import { PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { CaseFileService } from './case-file.service';

@Component({
  selector: 'app-case-file',
  templateUrl: './case-file.component.html'
})
export class CaseFileComponent implements OnInit {

  caseFiles = { items: [], totalCount: 0 } as PagedResultDto<any>;
  page: number = 0;
  isModalOpen = false;
  searchTextEntered = "";


  constructor(
    private readonly caseFileService: CaseFileService,
    private readonly confirmation: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getCaseFiles()
  }

  getCaseFiles(){
    this.caseFileService.getCaseFiles().subscribe(results =>{
      this.caseFiles.items = results;
      this.caseFiles.totalCount = results.length;
    });
  }

  // remove case file
  removeCaseFile(caseId: string){
    this.confirmation.warn('::Are you sure you want to delete this Number?', '::Confirm Delete').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.caseFileService.removeCaseFileById(caseId).subscribe(() =>{
          this.getCaseFiles();
        });
      }
    });
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.caseFileService.getCaseFiles().subscribe(results =>{
      this.caseFiles.items = results;
    });
  }
  // search text custom event called
  onSearchedText(searchedText:string){
    this.searchTextEntered = searchedText;
  }
}
