using System;
using fraudwall_backoffice.Exceptions;
using Volo.Abp.Domain.Entities.Auditing;

namespace fraudwall_backoffice.Investigation;

public class ReportInvestigation: AuditedAggregateRoot<Guid>
{
  public Guid ReportId { get; private set; }
  public Status InvestigationStatus { get; private set; }
  public Guid? AssignedUserId { get; internal set; }
  public ReasonClosed? ReasonClosed { get; private set;}

  public ReportInvestigation(
    Guid id, 
    Guid reportId,
    Status investigationStatus,
    Guid? assignedUserId = null, 
    ReasonClosed? reasonClosed = Investigation.ReasonClosed.Default
    ): base(id)
  {
    this.ReportId = reportId;
    this.InvestigationStatus = Status.Pending;
    this.AssignedUserId = assignedUserId;
    this.ReasonClosed = reasonClosed;
  }
  // contructor
  internal ReportInvestigation(){}

  
  //Open investigation
  public void OpenInvestigation(){
    this.InvestigationStatus = Status.Opened;
    this.ReasonClosed = null;
  }
  // close investigation
  public void CloseInvestigation(ReasonClosed closeReason){
    this.InvestigationStatus = Status.Closed;
    this.ReasonClosed = closeReason;
  }

  // assign investigaton to a user
  public void AssignInvestigation(Guid userId){
    if((InvestigationStatus != Status.Closed )&&( InvestigationStatus == Status.Pending)){
      throw new InvestigationStateException("Cannot Assign a Closed Investigation to a User");
    }
    this.AssignedUserId = userId;
  }

  public void UnassignInvestigation(){
    if(InvestigationStatus != Status.Closed){
      throw new InvestigationStateException("Cannot Unassigned a Closed Investigation");
    }
    this.AssignedUserId = null;
  }
}