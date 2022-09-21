using System;

namespace fraudwall_backoffice.Investigation;

public class UpdateInvestigatonReportDto{
  public Guid id {get; set;}
  public Status investigationStatus { get; set; }
  public ReasonClosed reasonClosed { get; set;}
  public Guid assignedUserId { get; set; }
}