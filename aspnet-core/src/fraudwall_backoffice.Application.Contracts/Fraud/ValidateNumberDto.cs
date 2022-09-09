using fraudwall_backoffice.Risk;

namespace fraudwall_backoffice.Fraud;

public class ValiatePhoneNumberDto
{
  public string PhoneNumber { get; set; }
  public int ReportCount { get; set; }
  public float Rating { get; set; }
  public RiskType RiskLevel { get; set; }
}