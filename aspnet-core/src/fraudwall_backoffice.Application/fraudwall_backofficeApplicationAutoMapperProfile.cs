using AutoMapper;
using fraudwall_backoffice.Investigation;

namespace fraudwall_backoffice;

public class fraudwall_backofficeApplicationAutoMapperProfile : Profile
{
    public fraudwall_backofficeApplicationAutoMapperProfile()
    {
        CreateMap<ReportInvestigation,InvestigationReportDto>();
        CreateMap<CreateUpdateInvestigationReportDto,ReportInvestigation>();
    }
}
