import type { ReasonClosed } from './reason-closed.enum';
import type { Status } from './status.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface AssignInvestigationDto {
  investigationId?: string;
  assignUserId?: string;
}

export interface ClosedInvestigationDto {
  investigationId?: string;
  reasonClosed: ReasonClosed;
}

export interface CreateInvestigationDto {
  reportId: string;
  investigationStatus: Status;
  assignedUserId?: string;
}

export interface InvestigationReportDto extends AuditedEntityDto<string> {
  reportId?: string;
  investigationStatus: Status;
  reasonClosed: ReasonClosed;
  assignedUserId?: string;
}
