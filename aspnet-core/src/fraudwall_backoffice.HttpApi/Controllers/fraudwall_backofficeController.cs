using fraudwall_backoffice.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace fraudwall_backoffice.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class fraudwall_backofficeController : AbpControllerBase
{
    protected fraudwall_backofficeController()
    {
        LocalizationResource = typeof(fraudwall_backofficeResource);
    }
}
