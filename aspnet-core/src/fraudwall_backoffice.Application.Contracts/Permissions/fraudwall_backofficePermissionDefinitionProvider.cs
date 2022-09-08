using fraudwall_backoffice.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace fraudwall_backoffice.Permissions;

public class fraudwall_backofficePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var fraudwall = context.AddGroup(fraudwall_backofficePermissions.GroupName);
        var fraudNumber = fraudwall.AddPermission(fraudwall_backofficePermissions.FraudNumberManagement);
        fraudNumber.AddChild("Create");
        fraudNumber.AddChild("Edit");
        fraudNumber.AddChild("Delete");
        fraudNumber.AddChild("Read");
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<fraudwall_backofficeResource>(name);
    }
}
