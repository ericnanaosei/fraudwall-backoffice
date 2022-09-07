using fraudwall_backoffice.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace fraudwall_backoffice;

[DependsOn(
    typeof(fraudwall_backofficeEntityFrameworkCoreTestModule)
    )]
public class fraudwall_backofficeDomainTestModule : AbpModule
{

}
