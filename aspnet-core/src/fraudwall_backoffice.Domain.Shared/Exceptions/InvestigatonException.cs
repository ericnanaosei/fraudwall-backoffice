using Volo.Abp;

namespace fraudwall_backoffice.Exceptions;

public class InvestigationStateException: BusinessException
{
  public InvestigationStateException(string code): base(code)
  {

  }
}