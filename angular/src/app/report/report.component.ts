import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportInvestigationService } from '@proxy/investigation';
import { ModalService } from '../modal/modal.service';
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
  showModal: boolean;
  modalTitle: string;

  // modal
  isModalOpen = false;
  investigationForm: FormGroup

  constructor( 
    private readonly reportService: ReportService,
    private readonly modalService: ModalService,
    private readonly formbuilder: FormBuilder,
    private readonly reportInvestigationService: ReportInvestigationService,
    ) {

     }

  ngOnInit(){
    this.reportService.getReportList().subscribe(report => {
      this.reportList = report;
      this.totalCount = report.length;
    });
    this.showModal = this.modalService.hideModal;
    this.modalTitle = "Create New Investigation"
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
  showPageModal(){
    this.showModal = this.modalService.showModal;
  }
  // close page modal
  closePageModal(data?: boolean){
    this.showModal = data;
    // alert(this.showModal);
  }

  // create Investigation
  createInvestigation(){
    this.buildInvestigationForm();
    this.isModalOpen = true;
  }

  // build form
  buildInvestigationForm() {
    this.investigationForm = this.formbuilder.group({
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
