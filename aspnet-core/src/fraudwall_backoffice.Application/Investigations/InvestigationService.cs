using System;
using fraudwall_backoffice.Investigation;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Application.Dtos;

namespace fraudwall_backoffice.Investigations;

public class ReportInvestigationService: 
  CrudAppService<
  ReportInvestigation,
  InvestigationReportDto,
  Guid,
  PagedAndSortedResultRequestDto,
  CreateUpdateInvestigationReportDto
  >, IInvestigationReportService
{
  public ReportInvestigationService(IRepository<ReportInvestigation, Guid> repository): base(repository){

  }
}