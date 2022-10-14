import { PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService, ToasterService} from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from 'src/app/report/report.service';
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
  selectedCase = {} as any;
  // modal
  isModalOpen = false;

  // Remark
  remarkForm: FormGroup;

  constructor(
    private readonly caseFileService: CaseFileService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly reportService: ReportService,
    private readonly confirmation: ConfirmationService,
    private readonly formBuilder: FormBuilder,
    private readonly toasterService: ToasterService,
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

  // remove report
  removeReportById(reportId: string, caseId){
    this.confirmation.warn('::Are you sure you want to delete this Report?', '::Confirm Delete').subscribe((status)=>{
      if(status === Confirmation.Status.confirm){
        console.log("Report Deleted: " + reportId)
        this.getCaseFileById(caseId);
      }
    })
  }

  // Add or Edit Remarks
  addEditRemarks(caseId: string){
    this.caseFileService.getCaseFileById(caseId).subscribe(result => {
      this.selectedCase = result;
      this.buildRemarkForm();
      this.isModalOpen = true;
    })
  }

  buildRemarkForm(){
    this.remarkForm = this.formBuilder.group({
      remarks: [this.selectedCase.remark || '', Validators.required]
    })
  }
  saveRemark(){
    if(this.remarkForm.invalid){
      return;
    }
    const request = this.caseFileService.addRemarksToCaseFile(this.selectedCase.caseId, this.remarkForm.value);
    request.subscribe(result => {
      this.toasterService.success("New Record Saved", "Add/Edit Remarks");
      this.isModalOpen = false;
      this.remarkForm.reset();
      return this.getCaseFileById(result.caseId);
    })
  }

}
