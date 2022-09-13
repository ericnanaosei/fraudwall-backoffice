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
    CreateInvestigationReportDto>, 
  IInvestigationReportService
{
  private readonly IRepository<ReportInvestigation,Guid> _investigationRepository;
  private readonly InvestigationManager _investigationManager;
  private readonly IRepository<IdentityUser,Guid> _userRepository;


  // investigation service constructor
  public ReportInvestigationService(
    IRepository<ReportInvestigation, Guid> investigationRepository,
    InvestigationManager manager,
    IRepository<IdentityUser,Guid> userRepository
    ): base(investigationRepository)
  {
    _investigationRepository = investigationRepository;
    _investigationManager = manager;
    _userRepository = userRepository;
  }

  // open investigation method
  public async Task Open(Guid id){
    // find investigation
    var investigationReport = await _investigationRepository.GetAsync(invest => invest.Id ==id);
    _investigationManager.OpenInvestigation(investigationReport);
    await _investigationRepository.UpdateAsync(investigationReport);

  }

// close investigation
  public async Task Close(ClosedInvestigationDto input){
    // find investigation
    var investigationReport = await _investigationRepository.GetAsync(invest => invest.Id == input.investigationId);
    _investigationManager.CloseInvestigation(investigationReport, input.reason);
    await _investigationRepository.UpdateAsync(investigationReport);

  }

  // assign investigation
  public async Task AssignUser(AssignInvestigationDto input){
    // find investigation
    var investigation = await _investigationRepository.GetAsync(invest => invest.Id == input.investigationId);
    if(investigation !=null){
      // find user
      var userFound = await _userRepository.GetAsync(user => user.Id == input.AssignUserId);
      if(userFound != null){
        // assign investigation
        _investigationManager.AssignToAsync(investigation, userFound);
        _investigationManager.OpenInvestigation(investigation);
        await _investigationRepository.UpdateAsync(investigation);
        
      }
      throw new InvestigationStateException("User not found");
    }
    throw new InvestigationStateException("Investigation not found");
  }

  // unassigned investigation
  public async Task UnassignUser(AssignInvestigationDto input){
    // find investigation
    var investigation = await _investigationRepository.GetAsync(invest => invest.Id == input.investigationId);
    var userFound = await _userRepository.GetAsync(user => user.Id == input.AssignUserId);
    if(investigation != null && investigation.AssignedUserId == userFound.Id){
      _investigationManager.UnassignUser(investigation);
      await _investigationRepository.UpdateAsync(investigation);
    }
    throw new InvestigationStateException("Investigation not found or user not found");
  }
}