import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateInvestigationCommentDto {
  userId: string;
  investigationId: string;
  note: string;
}

export interface InvestigationCommentDto extends AuditedEntityDto<string> {
  userId?: string;
  investigationId?: string;
  note?: string;
}
