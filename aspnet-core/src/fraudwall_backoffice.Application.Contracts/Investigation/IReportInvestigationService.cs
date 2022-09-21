using System;
using Volo.Abp.Application.Services;
using Volo.Abp.Application.Dtos;
using System.Threading.Tasks;


namespace fraudwall_backoffice.Investigation;

public interface IInvestigationReportService:
  ICrudAppService<
  InvestigationReportDto,
  Guid,
  PagedAndSortedResultRequestDto,
  CreateInvestigationDto
  >
{
  public Task OpenInvestigation(Guid id);
  public Task CloseInvestigation(ClosedInvestigationDto input);
  public Task AssignInvestigation(AssignInvestigationDto input);
  public Task UnassignInvestigation(Guid id);
}