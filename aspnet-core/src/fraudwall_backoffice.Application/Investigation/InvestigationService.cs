using System;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Application.Dtos;
using System.Threading.Tasks;
using fraudwall_backoffice.Exceptions;
using Volo.Abp.Identity;

namespace fraudwall_backoffice.Investigation;

public class ReportInvestigationService: 
  CrudAppService<
    ReportInvestigation,
    InvestigationReportDto,
    Guid,
    PagedAndSortedResultRequestDto,
    CreateInvestigationDto>, 
  IInvestigationReportService
{
  private readonly IRepository<ReportInvestigation,Guid> _investigationRepository;
  private readonly InvestigationReportManager _investigationReportManager;
  private readonly IRepository<IdentityUser,Guid> _userRepository;


  // investigation service constructor
  public ReportInvestigationService(
    IRepository<ReportInvestigation, Guid> investigationRepository,
    InvestigationReportManager manager,
    IRepository<IdentityUser,Guid> userRepository
    ): base(investigationRepository)
  {
    _investigationRepository = investigationRepository;
    _investigationReportManager = manager;
    _userRepository = userRepository;
  }

  // open investigation method
  public async Task OpenInvestigation(Guid id){
    // find investigation
    var investigationReport = await _investigationRepository.GetAsync(invest => invest.Id ==id);
    _investigationReportManager.OpenInvestigation(investigationReport);
    await _investigationRepository.UpdateAsync(investigationReport);

  }

// close investigation
  public async Task CloseInvestigation(ClosedInvestigationDto input){
    // find investigation
    var investigationReport = await _investigationRepository.GetAsync(invest => invest.Id == input.investigationId);
    _investigationReportManager.CloseInvestigation(investigationReport, input.reasonClosed);
    await _investigationRepository.UpdateAsync(investigationReport);

  }

  // assign investigation
  public async Task AssignInvestigation(AssignInvestigationDto input){
    // find investigation
    var investigation = await _investigationRepository.GetAsync(invest => invest.Id == input.investigationId);
    if(investigation !=null){
      // find user
      var userFound = await _userRepository.GetAsync(user => user.Id == input.AssignUserId);
      if(userFound != null){
        // assign investigation
        _investigationReportManager.AssignToAsync(investigation, userFound);
        _investigationReportManager.OpenInvestigation(investigation);
        await _investigationRepository.UpdateAsync(investigation);
        
      }
      throw new InvestigationStateException("User not found");
    }
    throw new InvestigationStateException("Investigation not found");
  }

  // unassigned investigation
  public async Task UnassignInvestigation(AssignInvestigationDto input){
    // find investigation
    var investigation = await _investigationRepository.GetAsync(invest => invest.Id == input.investigationId);
    var userFound = await _userRepository.GetAsync(user => user.Id == input.AssignUserId);
    if(investigation != null && investigation.AssignedUserId == userFound.Id){
      _investigationReportManager.UnassignInvestigation(investigation);
      await _investigationRepository.UpdateAsync(investigation);
    }
    throw new InvestigationStateException("Investigation not found or user not found");
  }
}