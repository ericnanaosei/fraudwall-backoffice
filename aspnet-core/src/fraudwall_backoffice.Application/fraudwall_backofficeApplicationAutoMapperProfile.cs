using AutoMapper;
using fraudwall_backoffice.Comment;
using fraudwall_backoffice.Fraud;
using fraudwall_backoffice.Investigation;

namespace fraudwall_backoffice;

public class fraudwall_backofficeApplicationAutoMapperProfile : Profile
{
    public fraudwall_backofficeApplicationAutoMapperProfile()
    {
        // investigation
        CreateMap<ReportInvestigation,InvestigationReportDto>();
        CreateMap<CreateUpdateInvestigationReportDto,ReportInvestigation>();

        // fraud numbers
        CreateMap<FraudNumber,FraudNumberDto>();
        CreateMap<CreateFraudNumberDto,FraudNumber>();
        CreateMap<FraudNumber,ValiatePhoneNumberDto>();

        // investigation comment
        CreateMap<InvestigationComment,InvestigationCommentDto>();
        CreateMap<CreateUpdateInvestigationCommentDto,InvestigationComment>();

    }
}
