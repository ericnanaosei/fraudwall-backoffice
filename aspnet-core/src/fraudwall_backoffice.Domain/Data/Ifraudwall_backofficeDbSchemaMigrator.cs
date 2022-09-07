using System.Threading.Tasks;

namespace fraudwall_backoffice.Data;

public interface Ifraudwall_backofficeDbSchemaMigrator
{
    Task MigrateAsync();
}
