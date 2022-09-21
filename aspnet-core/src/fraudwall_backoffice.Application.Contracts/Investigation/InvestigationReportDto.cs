using System;
using Volo.Abp.Application.Dtos;

namespace fraudwall_backoffice.Investigation;

public class InvestigationReportDto: AuditedEntityDto<Guid>
{
  public string ReportId { get; set; }
  public Status InvestigationStatus { get; set; }
  public ReasonClosed ReasonClosed { get; set;}
  public string AssignedUserId { get; set; }
}