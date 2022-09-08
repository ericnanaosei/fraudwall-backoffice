using System;
using System.ComponentModel.DataAnnotations;
using fraudwall_backoffice.Closed;
using Volo.Abp.Application.Dtos;

namespace fraudwall_backoffice.Investigations;

public class CreateInvestigationReportDto: CreationAuditedEntityDto<Guid>
{
  [Required]
  public Guid ReportId { get; set; }
}