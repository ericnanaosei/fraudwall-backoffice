using System;
using Volo.Abp.Application.Dtos;

namespace fraudwall_backoffice.Investigation;

public class InvestigationReportDto: AuditedEntityDto<Guid>
{
  public Guid ReportId { get; set; }
  public Status InvestigationStatus { get; private set; }
  public ReasonClosed ReasonClosed { get; private set;}
  public Guid AssignedUserId { get; private set; }
}