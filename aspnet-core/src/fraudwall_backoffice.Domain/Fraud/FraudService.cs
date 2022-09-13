using System;
using System.Threading.Tasks;
using fraudwall_backoffice.Risk;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;

namespace fraudwall_backoffice.Fraud;

public class FraudManager: DomainService
{
  private readonly IRepository<FraudNumber,Guid> _repository;

  //Fraudmanager constructor
  public FraudManager(IRepository<FraudNumber,Guid> repository){
    _repository = repository;
  }

  // creating a new fraud number
  public async Task<FraudNumber> CreateAsync( 
    string phoneNumber, 
    int reportCount, 
    float rating, 
    RiskType riskType)
  {
    if(await _repository.AnyAsync(phone => phone.PhoneNumber == phoneNumber)){
      throw new BusinessException("Phone number alredy exist");
    }
    return new FraudNumber(
      GuidGenerator.Create(),
      phoneNumber,
      reportCount,
      rating,
      riskType
    );
  }

  // validate phone number
  public async Task<FraudNumber> ValidateAsync(string phoneNumber){
    if(await _repository.AnyAsync(result => result.PhoneNumber == phoneNumber)){
      return await _repository.GetAsync(x => x.PhoneNumber == phoneNumber);
    }
    throw new BusinessException("Phone number does not exist");
  }

}