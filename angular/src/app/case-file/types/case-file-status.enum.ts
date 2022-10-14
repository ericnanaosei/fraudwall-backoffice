import { mapEnumToOptions } from "@abp/ng.core";

export enum CaseFileStatus {
  Default = 'default', Open='open', Closed='closed'
}

export const CaseFileStatusOptions = mapEnumToOptions(CaseFileStatus);