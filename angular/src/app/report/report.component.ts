import { Component, OnInit } from '@angular/core';
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

  constructor( 
    private readonly reportService: ReportService,
    private readonly modalService: ModalService
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
}
