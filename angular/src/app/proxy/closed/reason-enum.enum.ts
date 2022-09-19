import { mapEnumToOptions } from '@abp/ng.core';

export enum ReasonEnum {
  InsufficientEvidence = 0,
  Completed = 1,
  Incomplete = 2,
  Archived = 3,
}

export const reasonEnumOptions = mapEnumToOptions(ReasonEnum);
