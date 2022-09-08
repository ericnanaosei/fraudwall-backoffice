using System;
using fraudwall_backoffice.Closed;
using Volo.Abp.Application.Dtos;

namespace fraudwall_backoffice.Investigations;

public class InvestigationReportDto: AuditedEntityDto<Guid>
{
  public Guid ReportId { get; set; }
  public bool IsClosed { get; set; }
  public ReasonEnum ReasonClosed { get; private set;}
  public Guid AssignedUserId { get; set; }
}