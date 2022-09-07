using System;
using fraudwall_backoffice.Closed;
using fraudwall_backoffice.Exceptions;
using Volo.Abp.Domain.Entities.Auditing;

namespace fraudwall_backoffice.Investigation;

public class ReportInvestigation: AuditedAggregateRoot<Guid>
{
  public Guid? ReportId { get; private set; }
  public bool IsClosed { get; private set; }
  public ReasonEnum? ReasonClosed { get; private set;}
  public Guid? AssignedUserId { get; set; }

  public ReportInvestigation(Guid id, Guid reportId): base(id)
  {
    this.ReportId = reportId;
    this.AssignedUserId = null;
    this.ReasonClosed = null;
  }

  //reopen investigation
  public void Open(){
    this.IsClosed = false;
    this.ReasonClosed = null;
  }
  // close investigation
  public void Close(ReasonEnum closeReason){
    this.IsClosed = true;
    this.ReasonClosed = closeReason;
  }

  // assign investigaton to a user
  public void AssignUser(Guid userId){
    if(IsClosed){
      throw new InvestigationStateException("Cannot Assign a Closed Investigation to a User Open First");
    }
    this.AssignedUserId = userId;
  }

  public void UnassignUser(){
    this.AssignedUserId = null;
  }
}