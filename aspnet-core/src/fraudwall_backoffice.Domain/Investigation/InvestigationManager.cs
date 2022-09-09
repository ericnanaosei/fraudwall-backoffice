using fraudwall_backoffice.Closed;
using fraudwall_backoffice.Exceptions;
using Volo.Abp.Domain.Services;
using Volo.Abp.Identity;


namespace fraudwall_backoffice.Investigation;

public class InvestigationManager: DomainService
{

  // contructor
  public InvestigationManager()
  {
  }

// assign investigation
  public void AssignToAsync(ReportInvestigation investigation, IdentityUser user){
    if(investigation.AssignedUserId == null && investigation.IsClosed == false){
      investigation.AssignUser(user.Id);
    }
    throw new InvestigationStateException("Investigation already assigned");
  }

  // close investigation
  public void CloseInvestigation(ReportInvestigation investigation, ReasonEnum closedReason){
    investigation.Close(closedReason);
  }
  // open investigation
  public void OpenInvestigation(ReportInvestigation investigation){
    investigation.Open();
  }

  // unassign user
  public void UnassignUser(ReportInvestigation investigation){
    investigation.UnassignUser();
  }
}
