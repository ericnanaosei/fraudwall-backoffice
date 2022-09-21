using System;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Application.Dtos;
using System.Threading.Tasks;
using fraudwall_backoffice.Exceptions;
using Volo.Abp.Identity;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Authorization;

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

  // create investigation
  public async override Task<InvestigationReportDto> CreateAsync(CreateInvestigationDto input){
    var authorize = await AuthorizationService.AuthorizeAsync("Fraud_Number_Management");
    // check authorization 
    if(authorize.Succeeded == false){
      throw new AbpAuthorizationException("Forbidden resource");
    }
    // create investigation
    var investigation = await _investigationReportManager.CreateRportInvestigationAsync(
      input.ReportId,
      input.InvestigationStatus,
      input.AssignedUserId
    );
    // save object
    await _investigationRepository.InsertAsync(investigation);
    return ObjectMapper.Map<ReportInvestigation,InvestigationReportDto>(investigation);
  }

  // assign investigation
  public async Task AssignInvestigation(AssignInvestigationDto input){
    // find investigation
    var investigation = await _investigationRepository.GetAsync(invest => invest.Id == input.investigationId);
    if(investigation !=null){
      // find user
      var userFound = await _userRepository.GetAsync(user => user.Id == input.assignUserId);
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
  public async Task UnassignInvestigation(Guid id){
    // find investigation
    var investigation = await _investigationRepository.GetAsync(invest => invest.Id == id);
    if(investigation != null){
      _investigationReportManager.UnassignInvestigation(investigation);
      await _investigationRepository.UpdateAsync(investigation);
    }
    throw new InvestigationStateException("Investigation not found");
  }
}