import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportInvestigationService } from '@proxy/investigation';
import { ReportDto } from './Dto/ReportDto';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {
  reportList: ReportDto[];
  page: number = 1;
  totalCount: number = 0;
  // modal
  isModalOpen = false;
  investigationForm: FormGroup

  constructor( 
    private readonly reportService: ReportService,
    private readonly formBuilder: FormBuilder,
    private readonly reportInvestigationService: ReportInvestigationService,
    ) {

     }

  ngOnInit(){
    this.reportService.getReportList().subscribe(report => {
      this.reportList = report;
      this.totalCount = report.length;
    });
  }

  // get report by id
  getReport(id: string){
    this.reportService.getReport(id).subscribe(report => {
      return report;
    });
  }
  // on page change event
  pageChangeEvent(event: number){
    this.page = event;
    this.reportService.getReportList();
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
}
