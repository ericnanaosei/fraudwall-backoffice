using Volo.Abp.Settings;

namespace fraudwall_backoffice.Settings;

public class fraudwall_backofficeSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(fraudwall_backofficeSettings.MySetting1));
    }
}
