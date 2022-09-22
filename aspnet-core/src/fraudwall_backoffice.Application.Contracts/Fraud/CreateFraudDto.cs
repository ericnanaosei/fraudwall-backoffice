using System;
using System.ComponentModel.DataAnnotations;

namespace fraudwall_backoffice.Fraud;

public class CreateFraudNumberDto
{
  [Required]
  [StringLength(10)]
  public string PhoneNumber { get; set; }
  public int ReportCount { get; set; }
  public float Rating { get; set; }
  public RiskType RiskLevel { get; set; }

}