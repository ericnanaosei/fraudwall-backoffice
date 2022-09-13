using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;


namespace fraudwall_backoffice.Fraud;

public interface IFraudService: 
  ICrudAppService<
  FraudNumberDto,
  Guid, 
  PagedAndSortedResultRequestDto,
  CreateFraudNumberDto>
{
  // validate number
  public Task<ValiatePhoneNumberDto> ValiatePhoneNumber(string phoneNumber);
}