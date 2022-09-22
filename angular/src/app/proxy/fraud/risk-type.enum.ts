import { mapEnumToOptions } from '@abp/ng.core';

export enum RiskType {
  Low = 0,
  Medium = 1,
  High = 2,
}

export const riskTypeOptions = mapEnumToOptions(RiskType);
