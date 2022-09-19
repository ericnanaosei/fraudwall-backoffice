import type { AssignInvestigationDto, ClosedInvestigationDto, CreateInvestigationReportDto, InvestigationReportDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportInvestigationService {
  apiName = 'Default';

  assignUserByInput = (input: AssignInvestigationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/report-investigation/assign-user',
      body: input,
    },
    { apiName: this.apiName });

  closeByInput = (input: ClosedInvestigationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/report-investigation/close',
      body: input,
    },
    { apiName: this.apiName });

  create = (input: CreateInvestigationReportDto) =>
    this.restService.request<any, InvestigationReportDto>({
      method: 'POST',
      url: '/api/app/report-investigation',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/report-investigation/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, InvestigationReportDto>({
      method: 'GET',
      url: `/api/app/report-investigation/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<InvestigationReportDto>>({
      method: 'GET',
      url: '/api/app/report-investigation',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  openById = (id: string) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/report-investigation/${id}/open`,
    },
    { apiName: this.apiName });

  unassignUserByInput = (input: AssignInvestigationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/report-investigation/unassign-user',
      body: input,
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateInvestigationReportDto) =>
    this.restService.request<any, InvestigationReportDto>({
      method: 'PUT',
      url: `/api/app/report-investigation/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
