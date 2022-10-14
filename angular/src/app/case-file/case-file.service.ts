import { Rest, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { AddRemarkDto } from './interface/add-remarks.interface';
import { UpdateCaseFileDto } from './interface/update-case-file.interface';
import { CaseFileStatus } from './types/case-file-status.enum';

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

  getCaseFiles(){
    const request: Rest.Request<null> ={
      method: 'GET',
      url: '/case-file'
    };
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  getCaseFileById(caseId: string){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/case-file/${caseId}`,
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  getSuspectFileByPhone(phoneNumber: string){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/case-file/get-suspect-file-by-phone/${phoneNumber}`,
      responseType: 'json'
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  addRemarksToCaseFile(caseFileId: string, payload: AddRemarkDto){
    const request: Rest.Request<AddRemarkDto> = {
      method: 'PATCH',
      url: `/case-file/add-remarks/${caseFileId}`,
      body: payload,
      responseType: 'json'
    };
    return this.restService.request<AddRemarkDto, any>(request, { apiName: 'webapi'});
  }

  changeCaseStatus(caseFileId: string, status: CaseFileStatus){
    const request: Rest.Request<null> = {
      method: 'PATCH',
      url: `/case-file/change-status/${caseFileId}/to/${status}`,
      responseType: 'json'
    };
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  updateCaseFileById(caseFileId: string, payload: UpdateCaseFileDto){
    const request: Rest.Request<UpdateCaseFileDto> = {
      method: 'PATCH',
      url: `/case-file/${caseFileId}`,
      body: payload,
      responseType: 'json'
    };
    return this.restService.request<any, any>(request, { apiName: 'webapi'});
  }

  removeCaseFileById(caseFileId: string){
    const request: Rest.Request<null> = {
      method: 'DELETE',
      url: `/case-file/${caseFileId}`,
      responseType: 'json'
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }
}
