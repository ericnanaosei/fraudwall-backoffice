import { Rest, RestService } from '@abp/ng.core';
import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportDto } from './Dto/ReportDto';



@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private readonly restService:RestService,
    ) { }


  // get all reports
  getReportList(){
    const request: Rest.Request<ReportDto> ={
      method: 'GET',
      url: `/report`,
      responseType: 'json'
    };
    return this.restService.request<ReportDto, ReportDto[]>(request, { apiName: 'webapi'});
  }

  // get report by Id
  getReport(id: string){
    const request: Rest.Request<string> = {
      method: 'GET',
      url: '/report/' + id
    };
    return this.restService.request<string,ReportDto>(request, { apiName: 'webapi'});
  }

  //get fraudNumber details
  getNumberTotalReport(phoneNumber: string){
    const request: Rest.Request<ReportDto> = {
      method: 'GET',
      url: '/report/phone-number/'+ phoneNumber
    };
    return this.restService.request<ReportDto,ReportDto[]>(request, { apiName: 'webapi'});
  }
}
