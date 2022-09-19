import { mapEnumToOptions } from '@abp/ng.core';

export enum RiskType {
  Low = 1,
  Medium = 2,
  High = 3,
}

export const riskTypeOptions = mapEnumToOptions(RiskType);
