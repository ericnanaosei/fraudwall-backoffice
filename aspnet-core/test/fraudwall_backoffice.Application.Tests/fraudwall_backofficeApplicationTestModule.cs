using Volo.Abp.Modularity;

namespace fraudwall_backoffice;

[DependsOn(
    typeof(fraudwall_backofficeApplicationModule),
    typeof(fraudwall_backofficeDomainTestModule)
    )]
public class fraudwall_backofficeApplicationTestModule : AbpModule
{

}
