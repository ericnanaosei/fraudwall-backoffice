import type { AssignInvestigationDto, ClosedInvestigationDto, CreateInvestigationDto, InvestigationReportDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportInvestigationService {
  apiName = 'Default';

  assignInvestigationByInput = (input: AssignInvestigationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/report-investigation/assign-investigation',
      body: input,
    },
    { apiName: this.apiName });

  closeInvestigationByInput = (input: ClosedInvestigationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/report-investigation/close-investigation',
      body: input,
    },
    { apiName: this.apiName });

  create = (input: CreateInvestigationDto) =>
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
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  openInvestigationById = (id: string) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/report-investigation/${id}/open-investigation`,
    },
    { apiName: this.apiName });

  unassignInvestigationById = (id: string) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/report-investigation/${id}/unassign-investigation`,
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateInvestigationDto) =>
    this.restService.request<any, InvestigationReportDto>({
      method: 'PUT',
      url: `/api/app/report-investigation/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
