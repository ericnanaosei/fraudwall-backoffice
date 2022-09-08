using System;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Application.Dtos;

namespace fraudwall_backoffice.Fraud;

public class FraudService: 
  CrudAppService<
    FraudNumber,
    FraudNumberDto,
    Guid,
    PagedAndSortedResultRequestDto,
    CreateUpdateFraudNumberDto
    >,
  IFraudService
{
  public FraudService(IRepository<FraudNumber,Guid>repository):base(repository){
    
  }
  // add or override implementation
}