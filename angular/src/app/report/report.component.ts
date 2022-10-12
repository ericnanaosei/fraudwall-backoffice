import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportInvestigationService, statusOptions } from '@proxy/investigation';
import { ReportFile } from './Dto/report.interface';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {
  reportList: ReportFile[];
  page: number = 1;
  totalCount: number = 0;
  // modal
  isModalOpen = false;
  investigationForm: FormGroup
  investigationStatusOptions = statusOptions;
  searchTextEntered="";

  constructor( 
    private readonly reportService: ReportService,
    private readonly formBuilder: FormBuilder,
    private readonly reportInvestigationService: ReportInvestigationService,
    ) {

     }

  ngOnInit(){
    this.reportService.getReport().subscribe(report => {
      this.reportList = report;
      this.totalCount = report.length;
    });
  }

  // get report by id
  getReport(id: string){
    this.reportService.getReportById(id).subscribe(report => {
      return report;
    });
  }
  // on page change event
  pageChangeEvent(event: number){
    this.page = event;
    this.reportService.getReport();
  }

  // create Investigation
  createInvestigation(){
    this.buildForm();
    this.isModalOpen = true;
  }

  // build form
  buildForm() {
    this.investigationForm = this.formBuilder.group({
      reportId: ['', Validators.required],
      investigationStatus: [null, Validators.required],
      assignedUserId: [null,Validators.nullValidator]
    });
  };

  // save form
  save(){
    if(this.investigationForm.invalid){
      return;
    }
    this.reportInvestigationService.create(this.investigationForm.value).subscribe(() => {
      this.isModalOpen = false;
      this.investigationForm.reset();
    });
  }

  // search text custom event called
  onSearchedText(searchedText:string){
    this.searchTextEntered = searchedText;
    console.log(this.searchTextEntered);
  }

  navigateToReportDetail(){

  }
}
