using System;
using System.Collections.Generic;
using System.Text;
using fraudwall_backoffice.Localization;
using Volo.Abp.Application.Services;

namespace fraudwall_backoffice;

/* Inherit your application services from this class.
 */
public abstract class fraudwall_backofficeAppService : ApplicationService
{
    protected fraudwall_backofficeAppService()
    {
        LocalizationResource = typeof(fraudwall_backofficeResource);
    }
}
