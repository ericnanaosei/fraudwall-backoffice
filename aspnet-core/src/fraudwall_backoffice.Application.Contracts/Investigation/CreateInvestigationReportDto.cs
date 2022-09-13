using System;
using System.ComponentModel.DataAnnotations;


namespace fraudwall_backoffice.Investigation;

public class CreateInvestigationReportDto
{
  [Required]
  public Guid ReportId { get; set; }
}