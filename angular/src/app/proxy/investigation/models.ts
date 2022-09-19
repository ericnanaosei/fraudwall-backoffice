import type { ReasonEnum } from '../closed/reason-enum.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface AssignInvestigationDto {
  investigationId?: string;
  assignUserId?: string;
}

export interface ClosedInvestigationDto {
  investigationId?: string;
  reason: ReasonEnum;
}

export interface CreateInvestigationReportDto {
  reportId: string;
}

export interface InvestigationReportDto extends AuditedEntityDto<string> {
  reportId?: string;
  isClosed: boolean;
  reasonClosed: ReasonEnum;
  assignedUserId?: string;
}
