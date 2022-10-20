import { ConfigStateService, Rest, RestService } from '@abp/ng.core';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddRemarkDto } from './interface/add-remarks.interface';
import { UpdateCaseFileDto } from './interface/update-case-file.interface';
import { CaseFileStatus } from './types/case-file-status.enum';

@Injectable({
  providedIn: 'root'
})
export class CaseFileService {

  constructor(
    private readonly restService: RestService,
    private readonly config: ConfigStateService
  ) { }

  getCaseFileTotalRecords(){
    const request: Rest.Request<null> = {
      method: 'GET',
      url:`/case-file/get/total-records`,
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }

    return this.restService.request<null,number>(request,{ apiName: 'webapi',});
  }

  getCaseFiles(){
    const request: Rest.Request<null> ={
      method: 'GET',
      url: '/case-file',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    };
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  getCaseFileById(caseId: string){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/case-file/${caseId}`,
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  getSuspectFileByPhone(phoneNumber: string){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/case-file/get-suspect-file-by-phone/${phoneNumber}`,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  addRemarksToCaseFile(caseFileId: string, payload: AddRemarkDto){
    const request: Rest.Request<AddRemarkDto> = {
      method: 'PATCH',
      url: `/case-file/add-remarks/${caseFileId}`,
      body: payload,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    };
    return this.restService.request<AddRemarkDto, any>(request, { apiName: 'webapi'});
  }

  changeCaseStatus(caseFileId: string, status: CaseFileStatus){
    const request: Rest.Request<null> = {
      method: 'PATCH',
      url: `/case-file/change-status/${caseFileId}/to/${status}`,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    };
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  updateCaseFileById(caseFileId: string, payload: UpdateCaseFileDto){
    const request: Rest.Request<UpdateCaseFileDto> = {
      method: 'PATCH',
      url: `/case-file/${caseFileId}`,
      body: payload,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    };
    return this.restService.request<any, any>(request, { apiName: 'webapi'});
  }

  removeCaseFileById(caseFileId: string){
    const request: Rest.Request<null> = {
      method: 'DELETE',
      url: `/case-file/${caseFileId}`,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }
}
