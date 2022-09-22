using System;
using Volo.Abp.Application.Dtos;

namespace fraudwall_backoffice.Fraud;

public class FraudNumberDto: AuditedEntityDto<Guid>
{
  public string PhoneNumber { get; set; }
  public int ReportCount { get; set; }
  public float Rating { get; set; }
  public RiskType RiskLevel { get; set; }

}