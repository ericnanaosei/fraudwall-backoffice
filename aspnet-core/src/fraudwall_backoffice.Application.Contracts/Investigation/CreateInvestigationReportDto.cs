using System;
using System.ComponentModel.DataAnnotations;

namespace fraudwall_backoffice.Investigation;

public class CreateInvestigationDto
{
  [Required]
  public Guid ReportId { get; set; }
  public Status InvestigationStatus { get; set; }
  public Guid AssignedUserId { get; set;}
}