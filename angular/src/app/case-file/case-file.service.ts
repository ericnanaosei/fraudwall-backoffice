import { Rest, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseFileService {

  constructor(
    private readonly restService: RestService
  ) { }

  getCaseFileTotalRecords(){
    const request: Rest.Request<null> = {
      method: 'GET',
      url:`/case-file/get/total-records`,
    }

    return this.restService.request<null,number>(request,{ apiName: 'webapi'});
  }
}
