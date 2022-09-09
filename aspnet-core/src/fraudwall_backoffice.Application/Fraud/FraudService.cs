using System;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Application.Dtos;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Volo.Abp.Authorization;

namespace fraudwall_backoffice.Fraud;

public class FraudService: 
    CrudAppService<
      FraudNumber,
      FraudNumberDto,
      Guid,
      PagedAndSortedResultRequestDto,
      CreateFraudNumberDto>,
      IFraudService
{
  private readonly FraudManager _fraudManager;
  private readonly IRepository<FraudNumber,Guid> _fraudNumberRepository;
  public FraudService(
      IRepository<FraudNumber,Guid> repository,
      FraudManager fraudManager
    ):base(repository)
  {
    _fraudManager = fraudManager;
    _fraudNumberRepository = repository;
  }
  // create new fraud number
  public async override Task<FraudNumberDto> CreateAsync(CreateFraudNumberDto input){
    var authorize = await AuthorizationService.AuthorizeAsync("Fraud_Number_Management");
    // check authorization 
    if(authorize.Succeeded == false){
      throw new AbpAuthorizationException("Forbidden resource");
    }
    // create a valid fraud number with fraudmanager
    var fraudNumber = await _fraudManager.CreateAsync(
      input.PhoneNumber,
      input.ReportCount,
      input.Rating,
      input.RiskLevel
    );
    // save number
    await _fraudNumberRepository.InsertAsync(fraudNumber);
    return ObjectMapper.Map<FraudNumber,FraudNumberDto>(fraudNumber);
  }

  // validate a number with phoneNumber
  public async Task<ValiatePhoneNumberDto> ValiatePhoneNumber( string phoneNumber){
    var validateNumber = await _fraudManager.ValidateAsync(phoneNumber);
    return ObjectMapper.Map<FraudNumber,ValiatePhoneNumberDto>(validateNumber);
  }

}