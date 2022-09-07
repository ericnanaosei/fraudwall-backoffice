using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace fraudwall_backoffice.Data;

/* This is used if database provider does't define
 * Ifraudwall_backofficeDbSchemaMigrator implementation.
 */
public class Nullfraudwall_backofficeDbSchemaMigrator : Ifraudwall_backofficeDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
