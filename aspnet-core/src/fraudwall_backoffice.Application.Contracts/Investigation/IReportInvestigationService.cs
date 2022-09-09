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
  CreateInvestigationReportDto
  >
{
  public Task Open(Guid id);
  public Task Close(ClosedInvestigationDto input);
  public Task AssignUser(AssignInvestigationDto input);
  public Task UnassignUser(AssignInvestigationDto input);
}