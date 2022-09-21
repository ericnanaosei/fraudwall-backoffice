import { mapEnumToOptions } from '@abp/ng.core';

export enum ReasonClosed {
  Default = 0,
  InsufficientEvidence = 1,
  Completed = 2,
  Incomplete = 3,
  Archived = 4,
}

export const reasonClosedOptions = mapEnumToOptions(ReasonClosed);
