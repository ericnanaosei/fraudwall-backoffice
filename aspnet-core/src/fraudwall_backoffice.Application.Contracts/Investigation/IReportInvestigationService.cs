using System;
using Volo.Abp.Application.Services;
using Volo.Abp.Application.Dtos;
using fraudwall_backoffice.Investigation;

namespace fraudwall_backoffice.Investigations;

public interface IInvestigationReportService:
  ICrudAppService<
  InvestigationReportDto,
  Guid,
  PagedAndSortedResultRequestDto,
  CreateUpdateInvestigationReportDto
  >
{

}