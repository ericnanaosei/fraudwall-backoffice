import { Rest, RestService } from '@abp/ng.core';
import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FraudService {

  constructor(
    private readonly restService: RestService
  ) { }


  // create new fraud number
  createFraudNumber(phoneNumber: string){
    console.log(phoneNumber);
    const request: Rest.Request<string> = {
      method: 'POST',
      url: `/fraud-number/` + phoneNumber,
      responseType: 'json'
    }

    return this.restService.request<string, any>(request, { apiName: 'webapi'});
  }

  updateFraudNumberVisibility(phoneNumber: string){
    const request: Rest.Request<null> = {
      method: 'PATCH',
      url: `/fraud-number/change-visibility-status/` + phoneNumber,
      responseType: 'json'
    }
    return this.restService.request(request, { apiName: 'webapi'})
  }
  // get total Fraud numbers
  getTotalFraudNumbersCount(){
    const request: Rest.Request<number> ={
      method: 'GET',
      url: `/fraud-number/get-total/count`,
      responseType: 'json'
    };
    return this.restService.request<number,number>(request, { apiName: 'webapi'});
  }

  // get fraud number by phone
  getFraudNumberByPhone(phoneNumber: string){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/fraud-number/get-fraud-number-by-phone/` + phoneNumber,
      responseType: 'json'
    }
    return this.restService.request<null, string>(request, { apiName: 'webapi'});
  }

  // get all fraud numbers
  getFraudNumbers(){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/fraud-number`,
      responseType: 'json'
    }
    return this.restService.request<null,any>( request, {apiName: 'webapi'});
  }

  getFraudNumberById(fraudId:string){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/fraud-number/` + fraudId,
      responseType: 'json'
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  deleteFraudNumberById(fraudId:string){
    const request: Rest.Request<null> = {
      method: 'DELETE',
      url: `/fraud-number/` + fraudId,
      responseType: 'json'
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }
}
