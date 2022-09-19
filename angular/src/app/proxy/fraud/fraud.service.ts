import type { CreateFraudNumberDto, FraudNumberDto, ValiatePhoneNumberDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FraudService {
  apiName = 'Default';

  create = (input: CreateFraudNumberDto) =>
    this.restService.request<any, FraudNumberDto>({
      method: 'POST',
      url: '/api/app/fraud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/fraud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, FraudNumberDto>({
      method: 'GET',
      url: `/api/app/fraud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<FraudNumberDto>>({
      method: 'GET',
      url: '/api/app/fraud',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateFraudNumberDto) =>
    this.restService.request<any, FraudNumberDto>({
      method: 'PUT',
      url: `/api/app/fraud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  valiatePhoneNumberByPhoneNumber = (phoneNumber: string) =>
    this.restService.request<any, ValiatePhoneNumberDto>({
      method: 'POST',
      url: '/api/app/fraud/valiate-phone-number',
      params: { phoneNumber },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
