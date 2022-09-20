using System;

namespace fraudwall_backoffice.Investigation;

public class ClosedInvestigationDto
{
  public Guid investigationId { get; set; }
  public ReasonClosed reasonClosed { get; set; }
}
