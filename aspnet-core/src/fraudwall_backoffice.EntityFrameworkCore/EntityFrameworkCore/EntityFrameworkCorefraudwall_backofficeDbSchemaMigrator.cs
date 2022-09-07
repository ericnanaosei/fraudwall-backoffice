using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using fraudwall_backoffice.Data;
using Volo.Abp.DependencyInjection;

namespace fraudwall_backoffice.EntityFrameworkCore;

public class EntityFrameworkCorefraudwall_backofficeDbSchemaMigrator
    : Ifraudwall_backofficeDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCorefraudwall_backofficeDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the fraudwall_backofficeDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<fraudwall_backofficeDbContext>()
            .Database
            .MigrateAsync();
    }
}
