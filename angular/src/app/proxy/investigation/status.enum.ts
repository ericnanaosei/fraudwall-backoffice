import { mapEnumToOptions } from '@abp/ng.core';

export enum Status {
  Pending = 0,
  Opened = 1,
  Closed = 2,
}

export const statusOptions = mapEnumToOptions(Status);
