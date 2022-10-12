import { Rest, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private readonly restService:RestService,
    ) { }


  // get all reports
  getReport(){
    const request: Rest.Request<null> ={
      method: 'GET',
      url: `/report`,
      responseType: 'json'
    };
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  getTotalReportCount(){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/report/get-total/report-count`,
      responseType: 'json'
    };
    return this.restService.request<null,number>(request, { apiName: 'webapi'});
  }

  // get report by Id
  getReportById(id: string){
    const request: Rest.Request<string> = {
      method: 'GET',
      url: '/report/' + id
    };
    return this.restService.request<string,any>(request, { apiName: 'webapi'});
  }

  //get fraudNumber details
  getTotalReportForSuspect(phoneNumber: string){
    const request: Rest.Request<string> = {
      method: 'GET',
      url: '/report/get-all-report-for-suspect/'+ phoneNumber
    };
    return this.restService.request<string,any>(request, { apiName: 'webapi'});
  }
}
