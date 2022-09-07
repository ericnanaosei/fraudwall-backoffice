using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace fraudwall_backoffice;

[Dependency(ReplaceServices = true)]
public class fraudwall_backofficeBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "fraudwall_backoffice";
}
