using System;
using System.Threading.Tasks;
using fraudwall_backoffice.Exceptions;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Identity;


namespace fraudwall_backoffice.Investigation;

public class InvestigationReportManager: DomainService
{
  private readonly IRepository<ReportInvestigation,Guid> _investigationRepository;
  // contructor
  public InvestigationReportManager(IRepository<ReportInvestigation,Guid> investigationRepo)
  {
    _investigationRepository = investigationRepo;
  }

  // public async Task<ReportInvestigation> CreateRportInvestigation(
  //   Guid reportId,
  //   Status? investigationStatus, 
  //   ReasonClosed? reasonClosed , 
  //   Guid? assignedUserId
  // )
  // {
  //  if(await _investigationRepository.AnyAsync(result => result.ReportId == reportId)){
  //    throw new BusinessException("Investigation already created for this report");
  //  } 
  // }

// assign investigation
  public void AssignToAsync(ReportInvestigation investigation, IdentityUser user){
    if(investigation.AssignedUserId == null && investigation.InvestigationStatus == Status.Pending){
      investigation.AssignInvestigation(user.Id);
    }
    throw new InvestigationStateException("Investigation already assigned");
  }

  // close investigation
  public void CloseInvestigation(ReportInvestigation investigation, ReasonClosed closedReason){
    investigation.CloseInvestigation(closedReason);
  }
  // open investigation
  public void OpenInvestigation(ReportInvestigation investigation){
    investigation.OpenInvestigation();
  }

  // unassign user
  public void UnassignInvestigation(ReportInvestigation investigation){
    investigation.UnassignInvestigation();
  }
}
