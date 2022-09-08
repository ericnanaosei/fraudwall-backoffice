using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
namespace fraudwall_backoffice.Fraud;
public interface IFraudService: 
  ICrudAppService<
  FraudNumberDto,
  Guid, 
  PagedAndSortedResultRequestDto,
  CreateUpdateFraudNumberDto>
{
  // create additional interface methods
}