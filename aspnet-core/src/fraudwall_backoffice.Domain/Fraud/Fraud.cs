using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;


namespace fraudwall_backoffice.Fraud;

public class FraudNumber: AuditedAggregateRoot<Guid>
{
  public string PhoneNumber { get; private set; }
  public int? ReportCount { get; private set; }
  public float? Rating { get; private set; }
  public RiskType? RiskLevel { get; private set; }


  public FraudNumber(
    Guid id, 
      string phoneNumber, 
      int? reportCount = null, 
      float? rating = null, 
      RiskType? riskLevel =null
      ):base(id)
  {
    this.PhoneNumber = Check.NotNullOrWhiteSpace(phoneNumber, nameof(phoneNumber));
    this.ReportCount = reportCount;
    this.Rating = rating;
    this.RiskLevel = RiskType.Low;

  }
  // contructor
  internal FraudNumber(){}

  // add number
  public void AddPhoneNumber(string phoneNumber){
    this.PhoneNumber = Check.NotNullOrEmpty(phoneNumber, nameof(phoneNumber));
  }
  public void SetCount(int count){
    this.ReportCount += count;
  }

  public void SetRating(float increasedReportCount, float totalCount){
    var result = ( increasedReportCount %  totalCount ) * 100;
    this.Rating =result;
  }
  
  public void SetRiskLevel(int reportCount){ 
    if(reportCount <=3){
      this.RiskLevel = RiskType.Low;
    }
    else if ((reportCount > 3) && (reportCount<= 6)){
      this.RiskLevel = RiskType.Medium;
    }
    else{
      this.RiskLevel = RiskType.High;
    }
  }
}