using System;
using Volo.Abp;
using fraudwall_backoffice.Risk;
using Volo.Abp.Domain.Entities.Auditing;


namespace fraudwall_backoffice.Fraud;

public class FraudNumber: AuditedAggregateRoot<Guid>
{
  public string PhoneNumber { get; private set; }
  public int? ReportCount { get; private set; }
  public float? Rating { get; private set; }
  public RiskType? RiskLevel { get; private set; }

  public FraudNumber(Guid id, string phoneNumber, int reportCount, float rating, RiskType riskLevel):base(id)
  {
    this.PhoneNumber = Check.NotNullOrWhiteSpace(phoneNumber, nameof(phoneNumber));
    this.ReportCount = reportCount;
    this.Rating = rating;
    this.RiskLevel = RiskType.Low;

  }

  // add number
  public void AddPhoneNumber(string phoneNumber){
    this.PhoneNumber = phoneNumber;
  }
  public void SetCount(int count){
    this.ReportCount = count;
  }

  public void SetRating(float rate){
    this.Rating = rate;
  }
  
  public void SetRiskLevel(RiskType riskLevel){
    this.RiskLevel = riskLevel;
  }
}