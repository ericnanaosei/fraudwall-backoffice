using System;
using fraudwall_backoffice.Closed;

namespace fraudwall_backoffice.Investigation;

public class UpdateInvestigatonReportDto{
  public bool IsClosed { get; set; }
  public ReasonEnum ReasonClosed { get; private set;}
  public Guid AssignedUserId { get; set; }
}