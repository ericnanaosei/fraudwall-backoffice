using System;

namespace fraudwall_backoffice.Investigation;

public class AssignInvestigationDto
{
  public Guid investigationId { get; set; }
  public Guid AssignUserId { get; set; }
}