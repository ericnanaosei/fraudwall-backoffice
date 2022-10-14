import { PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService, ToasterService} from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from 'src/app/report/report.service';
import { CaseFileService } from '../case-file.service';
import { CaseFileStatusOptions, CaseFileStatus } from '../types/case-file-status.enum';

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
  isCaseStatusModalOpen = false;

  // Remark
  remarkForm: FormGroup;

  // case status
  caseFileStatusOptions = CaseFileStatusOptions;
  caseStatusForm: FormGroup;

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
        this.toasterService.success("Reported Deleted", "Delete Report");
        this.getCaseFileById(caseId);
      }
    })
  }

  // Change Case File Status
  changeCaseStatus(caseId: string, status: CaseFileStatus){
    this.caseFileService.getCaseFileById(caseId).subscribe(result =>{
      this.selectedCase = result;
      this.buildStatusForm();
      this.isCaseStatusModalOpen = true;
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

  // remark form build
  buildRemarkForm(){
    this.remarkForm = this.formBuilder.group({
      remarks: [this.selectedCase.remark || '', Validators.required]
    })
  }
  // saving remark 
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


  // building form for status
  buildStatusForm(){
    this.caseStatusForm = this.formBuilder.group({
      case_status: [ this.selectedCase.caseStatus || '', Validators.required]
    })
  }

  // save status change
  saveStatusChanged(){
    if(this.caseStatusForm.invalid){
      return;
    }
    const status = this.caseStatusForm.value.case_status
    const request = this.caseFileService.changeCaseStatus(this.selectedCase.caseId, status);
    request.subscribe(result =>{
      if(result){
        this.toasterService.success("Status Updated", "Change Case Status");
        this.isCaseStatusModalOpen = false;
        this.caseStatusForm.reset();
        return this.getCaseFileById(result.caseId);
      }
      else{
        this.toasterService.error("Changing Status Failed", "Change Case Status");
        this.isCaseStatusModalOpen = false;
        this.caseStatusForm.reset();
      }
    })
  }

  gotoFraudPage(){
    this.router.navigate(['fraud'])
  }

}
