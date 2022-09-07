using fraudwall_backoffice.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace fraudwall_backoffice.Permissions;

public class fraudwall_backofficePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(fraudwall_backofficePermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(fraudwall_backofficePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<fraudwall_backofficeResource>(name);
    }
}
