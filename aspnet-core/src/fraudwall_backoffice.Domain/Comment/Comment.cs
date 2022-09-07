using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
namespace fraudwall_backoffice.Comment;

public class InvestigationComment: AuditedAggregateRoot<Guid>
{
  public Guid? UserId { get; private set; }
  public Guid? InvestigationId { get; private set; }
  public string Note { get; private set; }

  public InvestigationComment(Guid id,string note, Guid userId, Guid investigationId): base(id)
  {
    this.Note = Check.NotNullOrEmpty(note, nameof(note));
    this.UserId = userId;
    this.InvestigationId = investigationId;
  }

  public void SetNote(string note){
    this.Note = note;
  }
  public void RemoveNote(string note){
    this.Note = null;
  }

}