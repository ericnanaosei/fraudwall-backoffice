using System;
using Shouldly;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Xunit;
using Volo.Abp.Validation;
using System.Linq;

namespace fraudwall_backoffice.Fraud;


public class FraudAppServiceTests : fraudwall_backofficeApplicationTestBase
{
    private readonly IFraudService _fraudNumberAppService;

    public FraudAppServiceTests()
    {
        _fraudNumberAppService = GetRequiredService<IFraudService>();
    }

    [Fact]
    public async Task Should_Not_Create_Fraudnumber_Without_Phonenumber()
    {
      // act
      var exception = await Assert.ThrowsAsync<AbpValidationException>(
        async ()=> {
          await _fraudNumberAppService.CreateAsync(
            new CreateUpdateFraudNumberDto{
              PhoneNumber ="",
              ReportCount = 2,
              RiskLevel = Risk.RiskType.Low,
              Rating = 2
            }
          );
        }
      );
      // assert
      exception.ValidationErrors.ShouldContain(err => err.MemberNames.Any(m => m == "PhoneNumber"));
    }

    
    [Fact]
    public async Task Should_Create_Valid_Fraudnumber(){
      // Act
      var results = await _fraudNumberAppService.CreateAsync(
        new CreateUpdateFraudNumberDto{
          PhoneNumber = "0242134019",
          ReportCount = 2,
          RiskLevel = Risk.RiskType.Low,
          Rating = 2

        }
      );
      // Assert
      results.Id.ShouldNotBe(Guid.Empty);
      results.Rating.ShouldBe(2);
    }
}
