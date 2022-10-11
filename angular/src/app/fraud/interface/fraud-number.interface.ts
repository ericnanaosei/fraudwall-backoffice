import { mapEnumToOptions } from "@abp/ng.core";

export interface FraudNumber {
  fraudNumberId: string,
  fraudNumber: string,
  totalReport: number,
  visibility: boolean,
  risk_Level: RiskLevel,
  modifiedAt: Date,
  createdAt: Date
}

export enum RiskLevel {
  Low = "low",
  Medium = "medium",
  High = "high"
}

export const riskLevelOptions = mapEnumToOptions(RiskLevel);
