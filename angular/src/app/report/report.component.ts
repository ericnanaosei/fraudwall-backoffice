import { Component, OnInit } from '@angular/core';
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
  searchTextEntered="";

  constructor( 
    private readonly reportService: ReportService,
    ){}

  ngOnInit(){
    this.reportService.getReport().subscribe(report => {
      this.reportList = report;
      this.totalCount = report.length;
    });
  }
  // on page change event
  pageChangeEvent(event: number){
    this.page = event;
    this.reportService.getReport();
  }

  // search text custom event called
  onSearchedText(searchedText:string){
    this.searchTextEntered = searchedText;
  }
}
