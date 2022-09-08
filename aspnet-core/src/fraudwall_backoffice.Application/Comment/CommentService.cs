using System;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Application.Dtos;

namespace fraudwall_backoffice.Comment;

public class InvestigationCommentService: 
  CrudAppService<
    InvestigationComment,
    InvestigationCommentDto,
    Guid,
    PagedAndSortedResultRequestDto,
    CreateUpdateInvestigationCommentDto
    >
{
  public InvestigationCommentService(IRepository<InvestigationComment,Guid> repository): base(repository){

  }
}