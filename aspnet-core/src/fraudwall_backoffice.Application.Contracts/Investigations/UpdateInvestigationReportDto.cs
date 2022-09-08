using System;
using fraudwall_backoffice.Closed;
using Volo.Abp.Application.Dtos;
namespace fraudwall_backoffice.Investigations;


public class UpdateInvestigationReportDto: FullAuditedEntityDto
{
  public Guid? AssignedUserId { get; set; }
}