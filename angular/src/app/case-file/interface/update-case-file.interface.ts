import { CaseFileStatus } from "../types/case-file-status.enum";

export interface UpdateCaseFileDto{
  status: CaseFileStatus;
  remarks: string;
}