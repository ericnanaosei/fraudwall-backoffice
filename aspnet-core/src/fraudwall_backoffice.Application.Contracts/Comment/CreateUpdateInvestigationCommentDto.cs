using System;
using System.ComponentModel.DataAnnotations;

namespace fraudwall_backoffice.Comment;

public class CreateUpdateInvestigationCommentDto
{
  [Required]
  public Guid UserId { get; set; }
  [Required]
  public Guid InvestigationId { get; set; }
  [Required]
  public string Note { get; set; }
}