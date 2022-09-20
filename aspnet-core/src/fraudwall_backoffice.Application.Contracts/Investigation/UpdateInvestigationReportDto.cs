using System;

namespace fraudwall_backoffice.Investigation;

public class UpdateInvestigatonReportDto{
  public bool IsClosed { get; set; }
  public ReasonClosed ReasonClosed { get; private set;}
  public Guid AssignedUserId { get; set; }
}