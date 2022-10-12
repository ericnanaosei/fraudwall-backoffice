import { PlatFormEnum } from "../types/Platform.enum";

export interface ReportFile{
  reportId: string;
  reporterNumber: string;
  suspectNumber: string;
  platForm: PlatFormEnum;
  incidentDate: Date
  description: string;
}