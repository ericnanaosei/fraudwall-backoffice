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
  getListReport(){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: '/report'
    };

    return this.restService.request<null,any>(request,{ apiName: 'webapi'});
  }

  getReport(id: string){
    const request: Rest.Request<string> = {
      method: 'GET',
      url: '/report/' + id
    };
    return this.restService.request<string,any>(request, { apiName: 'webapi'});
  }
}
