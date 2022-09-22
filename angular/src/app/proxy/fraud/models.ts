import type { RiskType } from './risk-type.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateFraudNumberDto {
  phoneNumber: string;
  reportCount: number;
  rating: number;
  riskLevel: RiskType;
}

export interface FraudNumberDto extends AuditedEntityDto<string> {
  phoneNumber?: string;
  reportCount: number;
  rating: number;
  riskLevel: RiskType;
}

export interface ValiatePhoneNumberDto {
  phoneNumber?: string;
}
