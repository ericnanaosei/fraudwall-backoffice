using System;
using Volo.Abp.Application.Services;
using Volo.Abp.Application.Dtos;
namespace fraudwall_backoffice.Comment;

public interface ICommentService: 
  ICrudAppService<
    InvestigationCommentDto,
    Guid,
    PagedAndSortedResultRequestDto,
    CreateUpdateInvestigationCommentDto
    >
{
  // method interface
}