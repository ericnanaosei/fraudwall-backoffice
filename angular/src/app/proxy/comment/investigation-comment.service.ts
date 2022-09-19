import type { CreateUpdateInvestigationCommentDto, InvestigationCommentDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvestigationCommentService {
  apiName = 'Default';

  create = (input: CreateUpdateInvestigationCommentDto) =>
    this.restService.request<any, InvestigationCommentDto>({
      method: 'POST',
      url: '/api/app/investigation-comment',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/investigation-comment/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, InvestigationCommentDto>({
      method: 'GET',
      url: `/api/app/investigation-comment/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<InvestigationCommentDto>>({
      method: 'GET',
      url: '/api/app/investigation-comment',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateInvestigationCommentDto) =>
    this.restService.request<any, InvestigationCommentDto>({
      method: 'PUT',
      url: `/api/app/investigation-comment/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
