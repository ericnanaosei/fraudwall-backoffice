using fraudwall_backoffice.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace fraudwall_backoffice.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(fraudwall_backofficeEntityFrameworkCoreModule),
    typeof(fraudwall_backofficeApplicationContractsModule)
    )]
public class fraudwall_backofficeDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
