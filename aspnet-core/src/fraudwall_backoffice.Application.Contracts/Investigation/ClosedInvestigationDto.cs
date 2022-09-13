using System;
using fraudwall_backoffice.Closed;

namespace fraudwall_backoffice.Investigation;

public class ClosedInvestigationDto
{
  public Guid investigationId { get; set; }
  public ReasonEnum reason { get; set; }
}
