import { Rest, RestService } from '@abp/ng.core';
import { HttpHeaders } from '@angular/common/http';
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
    const request: Rest.Request<null> = {
      method: 'POST',
      url: `/fraud-number/${phoneNumber}`,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }

    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  updateFraudNumberVisibility(phoneNumber: string){
    const request: Rest.Request<null> = {
      method: 'PATCH',
      url: `/fraud-number/change-visibility-status/${phoneNumber}`,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'})
  }
  // get total Fraud numbers
  getTotalFraudNumbersCount(){
    const request: Rest.Request<number> ={
      method: 'GET',
      url: `/fraud-number/get-total/count`,
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    };
    return this.restService.request<number,number>(request, { apiName: 'webapi'});
  }

  // get fraud number by phone
  getFraudNumberByPhone(phoneNumber: string){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/fraud-number/get-number-by-phone/${phoneNumber}`,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  // get all fraud numbers
  getFraudNumbers(){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/fraud-number`,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }
    return this.restService.request<null,any>( request, {apiName: 'webapi'});
  }

  getFraudNumberById(fraudNumberId:string){
    const request: Rest.Request<null> = {
      method: 'GET',
      url: `/fraud-number/${fraudNumberId}`,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }

  deleteFraudNumberById(fraudNumberId:string){
    const request: Rest.Request<null> = {
      method: 'DELETE',
      url: `/fraud-number/${fraudNumberId}`,
      responseType: 'json',
      headers: new HttpHeaders().append("X-API-KEY","k4gLDkkiXIPgKNEvBw/ACZNbExs1hEl5W0WsOnMMNq4=")
    }
    return this.restService.request<null, any>(request, { apiName: 'webapi'});
  }
}
