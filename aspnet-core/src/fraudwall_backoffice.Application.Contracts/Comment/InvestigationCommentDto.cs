using System;
using Volo.Abp.Application.Dtos;
namespace fraudwall_backoffice.Comment;

public class InvestigationCommentDto: AuditedEntityDto<Guid>
{
  public Guid UserId { get; set; }
  public Guid InvestigationId { get; set; }
  public string Note { get; set; }
}